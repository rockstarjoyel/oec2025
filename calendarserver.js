const express = require('express');
const sql = require('mssql');
const app = express();
const PORT = 4001;
const config = require("./calendarconfig");

const cors = require('cors');
app.use(cors());

// const config = {
//     user: 'OECTEST',
//     password: 'TesT99$',
//     server: 'OECSERVER4',
//     database: 'DEV_TEST',
//     options: {
//         encrypt: false,
//         trustServerCertificate: true,
//         enableArithAbort: true
//     }
// };

app.use(express.json());

async function connectToDatabase() {
    try {
        await sql.connect(config);
        console.log('Database connected successfully');
    } catch (err) {
        console.error('Database connection failed:', err);
        throw new Error('Database connection failed');
    }
}
app.get('/api/important-dates', async (req, res) => {
    try {
        await connectToDatabase();

        const { username, profession } = req.query; 

        
        if (!username && !profession) {
            return res.status(400).json({ error: 'Missing username or profession parameter' });
        }

        let dateQuery = `
            SELECT 
                CONVERT(VARCHAR, date, 23) AS date,  
                description, userId, Username, profession_name 
            FROM IMPORTANTDATES
        `;

        const dateRequest = new sql.Request();

        if (username) {
            
            dateQuery += ` WHERE Username = @username`;
            dateRequest.input('username', sql.VarChar, username);
        } else if (profession) {
            
            dateQuery += ` WHERE profession_name = @profession_name`;
            dateRequest.input('profession_name', sql.VarChar, profession);
        }

        const dateResult = await dateRequest.query(dateQuery);

        if (dateResult.recordset.length === 0) {
            return res.status(404).json({ message: `No important dates found for the given ${username ? 'username' : 'profession'}` });
        }

        res.json(dateResult.recordset);
        
    } catch (err) {
        console.error('Error fetching important dates from database:', err);
        res.status(500).json({ error: 'Failed to fetch important dates from the database', details: err.message });
    }
});


app.post('/api/add-event', async (req, res) => {
    const { userId, username, date, description, profession_name } = req.body;

    if (!userId || !username || !date || !description || !profession_name) {
        return res.status(400).json({ error: 'All fields are required, including profession' });
    }

    try {
        
        await sql.connect(config);
        console.log('Database connected successfully');

        
        const result = await sql.query`
    INSERT INTO ImportantDates (UserID, username, date, description, profession_name)
    VALUES (${userId}, ${username}, ${date}, ${description}, ${profession_name})
    SELECT SCOPE_IDENTITY() AS id;
`;


        console.log('Event added:', result);

        const eventId = result.recordset[0].id;
        res.status(200).json({ message: 'Event added successfully!', eventId });
    } catch (error) {
        console.error('Error saving event:', error);
        res.status(500).json({ error: 'An error occurred while saving the event', details: error.message });
    } finally {
        
        await sql.close();
    }
});

app.get('/api/professions', async (req, res) => {
    console.log('Received request for /api/professions');
    try {
        const pool = await sql.connect(config);
        const result = await pool.request().query('SELECT profession_name FROM professions');
        console.log('Fetched professions:', result.recordset);
        res.status(200).json(result.recordset.map(item => item.profession_name));
    } catch (err) {
        console.error('Error in /api/professions:', err);
        res.status(500).json({ error: 'Failed to fetch professions' });
    } finally {
        sql.close();
    }
});



app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
