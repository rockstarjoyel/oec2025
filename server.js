const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sql = require('mssql');
const moment = require('moment'); 
const multer = require('multer');
const app = express();
const PORT = process.env.PORT || 5000;

// const config = require("./dbconfig");

app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(bodyParser.json());



const config = {
    user: 'OECTEST',
    password: 'TesT99$',
    server: 'OECSERVER4',
    database: 'DEV_TEST',
    options: {
        encrypt: false,
        trustServerCertificate: true,
        enableArithAbort: true
    },
    pool: {
        max: 10,                             //maximum number of connections and minimum number of connections for preventing database connection from closing...
        min: 0,                  
        idleTimeoutMillis: 30000 
    }
};



let poolPromise;


const initDatabase = async () => {
    try {
        if (!poolPromise) {
            poolPromise = sql.connect(config);
            console.log('Connected to MSSQL');
        }
        return poolPromise;
    } catch (err) {
        console.error('Database connection failed:', err);
        throw err;
    }
};


app.use(async (req, res, next) => {
    try {
        if (!poolPromise) {
            console.log('Reinitializing database connection');
            await initDatabase();
        }
        req.pool = await poolPromise;
        next();
    } catch (err) {
        console.error('Error getting database connection:', err);
        res.status(500).send('Database connection error');
    }
});


app.get('/guidelines', async (req, res) => {
    try {
        const pool = req.pool;
        const result = await pool.request().query('SELECT * FROM Guidelines');
        res.json(result.recordset);
    } catch (err) {
        console.error('Error fetching guidelines:', err);
        res.status(500).send('Error fetching guidelines');
    }
});




app.post('/api/login', async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ success: false, message: 'Username and password are required!' });
    }

    try {
        
        await sql.connect(config);

        
        const result = await sql.query`
            SELECT UserID, Username, Profession, Password
            FROM users
            WHERE Username = ${username}
        `;

        if (result.recordset.length > 0) {
            const user = result.recordset[0];

            if (password === user.Password) {
            
                console.log('User found:', {
                    userId: user.UserID,
                    username: user.Username,
                    profession: user.Profession
                });

                
                return res.json({
                    success: true,
                    userId: user.UserID,  
                    username: user.Username,
                    profession: user.Profession,
                });
            } else {
                return res.status(401).json({ success: false, message: 'Invalid password!' });
            }
        } else {
            return res.status(404).json({ success: false, message: 'User not found!' });
        }
    } catch (error) {
        console.error('Error:', error);
        return res.status(500).json({ success: false, message: 'Internal server error.' });
    }
});



app.get('/users', async (req, res) => {
    try {
        const result = await req.pool.request().query('SELECT * FROM log_users');
        res.json(result.recordset);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


app.put('/users/:id', async (req, res) => {
    const userId = req.params.id;
    const { username, machine_info, ip_address } = req.body;

    try {
        await req.pool.request()
            .input('id', sql.Int, userId)
            .input('username', sql.VarChar, username)
            .input('machine_info', sql.VarChar, machine_info)
            .input('ip_address', sql.VarChar, ip_address)
            .query('UPDATE log_users SET Username = @username, MachineInfo = @machine_info, IPAddress = @ip_address WHERE Id = @id');

        res.json({ success: true });
    } catch (error) {
        console.error('Error updating user:', error);
        res.status(500).json({ success: false, message: 'Error updating user.' });
    }
});


app.delete('/users/:id', async (req, res) => {
    const userId = req.params.id;

    try {
        await req.pool.request()
            .input('id', sql.Int, userId)
            .query('DELETE FROM log_users WHERE Id = @id');

        res.json({ success: true });
    } catch (error) {
        console.error('Error deleting user:', error);
        res.status(500).json({ success: false, message: 'Error deleting user.' });
    }
});


app.get('/api/login-history', async (req, res) => {
    try {
        const result = await req.pool.request().query('SELECT * FROM LoginHistory ORDER BY LoginTime DESC');
        res.json(result.recordset);
    } catch (error) {
        console.error('Error fetching login history:', error);
        res.status(500).json({ error: error.message });
    }
});


app.get('/api/company-mission', async (req, res) => {
    const query = 'SELECT * FROM CompanyMission'; 
    try {
        const result = await req.pool.request().query(query);
        if (result.recordset.length === 0) {
            return res.status(404).json({ error: 'Mission not found' });
        }
        res.json(result.recordset);
    } catch (err) {
        console.error('Database query error:', err);
        return res.status(500).json({ error: 'Database query failed' });
    }
});


app.get('/api/vision', async (req, res) => {
    try {
        const result = await req.pool.request().query('SELECT Vision FROM CompanyVision');
        res.json(result.recordset.map(record => record.Vision));
    } catch (err) {
        console.error('SQL error', err);
        res.status(500).send('Internal Server Error');
    }
});


app.get('/api/company-values', async (req, res) => {
    try {
        const result = await req.pool.request().query('SELECT * FROM CompanyValues');
        res.json(result.recordset);
    } catch (err) {
        console.error('SQL error', err);
        res.status(500).json({ error: 'Database error', details: err.message });
    }
});


app.get('/api/menu/:userId', async (req, res) => {
    const userId = req.params.userId;

    try {
        const result = await req.pool.request()
            .input('userId', sql.Int, userId)
            .query('SELECT * FROM menu_items WHERE user_id = @userId ORDER BY level, parent_id');

        const menuData = result.recordset;
        const structuredMenu = buildMenuHierarchy(menuData);

        res.status(200).json(structuredMenu); 
    } catch (err) {
        console.error('Error fetching menu:', err);
        res.status(500).json({ error: 'Error fetching menu data' });
    }
});



function buildMenuHierarchy(menuItems) {
    const menuMap = {};
    const roots = [];

    menuItems.forEach(item => {
        item.subMenu = [];
        menuMap[item.id] = item;

        if (item.parent_id === null) {
            roots.push(item);  // Root items
        } else {
            const parent = menuMap[item.parent_id];
            if (parent) {
                parent.subMenu.push(item);
            }
        }
    });

    return roots;
}



app.post('/api/menu', async (req, res) => {
    const { name, url, user_id, parent_id } = req.body;

    if (!name || !user_id) {
        return res.status(400).json({ error: 'Name and user_id are required.' });
    }

    const sanitizedMenuData = {
        name: name.trim(),
        url: url.trim(),
        user_id: user_id,
        parent_id: parent_id || null,
        level: 0,  
    };

    try {
        const result = await req.pool.request()
            .input('name', sql.NVarChar, sanitizedMenuData.name)
            .input('url', sql.NVarChar, sanitizedMenuData.url)
            .input('parent_id', sql.Int, sanitizedMenuData.parent_id)
            .input('user_id', sql.Int, sanitizedMenuData.user_id)
            .input('level', sql.Int, sanitizedMenuData.level)
            .query(`
                INSERT INTO menu_items (name, url, parent_id, user_id, level)
                VALUES (@name, @url, @parent_id, @user_id, @level);
                SELECT SCOPE_IDENTITY() AS parent_id;
            `);

        const parentId = result.recordset[0].parent_id;

        res.status(201).json({
            message: 'Parent menu created successfully',
            parentId: parentId,
        });
    } catch (err) {
        console.error('Error creating menu:', err);
        res.status(500).json({ error: 'Error creating menu', details: err.message });
    }
});

async function checkBirthdays(pool) {
    const today = moment(); // Get today's date
    const todayMonth = today.month() + 1; // Month is 0-indexed, so add 1
    const todayDay = today.date(); // Day of the month

    console.log(`Today's Date: ${today.format('YYYY-MM-DD')}`); // Log today's date

    try {
        // Query to get active users whose birthday is today (month and day match)
        const result = await pool.request()
            .input('todayMonth', sql.Int, todayMonth)
            .input('todayDay', sql.Int, todayDay)
            .query(`
                SELECT name, date_of_birth  -- Correct column names for name and birthdate
                FROM Users
                WHERE 
                    status = 'active' AND
                    MONTH(date_of_birth) = @todayMonth AND
                    DAY(date_of_birth) = @todayDay
            `);

        // Log the raw result from the database
        console.log("Database Query Result:", result.recordset); // Log the query result

        // Return a formatted message array to send to the frontend
        return result.recordset.map(user => ({
            message: `Happy Birthday, ${user.name}! 🎉`,  // Format the message
            name: user.name  // Include the user's name in the data
        }));
    } catch (err) {
        console.error('Error checking birthdays:', err);
        return [];  // Return an empty array if there's an error
    }
}


app.get('/birthday-wishes', async (req, res) => {
    try {
      const today = new Date();
      const day = today.getDate();
      const month = today.getMonth() + 1; // Months are 0-based, so we add 1.
  
      // SQL query to get users with birthdays today
      const query = `
        SELECT name, date_of_birth 
        FROM users 
        WHERE status = 'active' 
        AND MONTH(date_of_birth) = @month 
        AND DAY(date_of_birth) = @day
      `;
  
      const pool = await sql.connect(config);
      const result = await pool.request()
        .input('month', sql.Int, month)
        .input('day', sql.Int, day)
        .query(query);
  
      // Log the raw result from the database
      console.log('Raw database result:', result.recordset); // This should show the full result from your database
  
      // Check if the result has name fields
      if (result.recordset && result.recordset.length > 0) {
        // Map the result to birthday messages
        const birthdayWishes = result.recordset.map(user => ({
          message: `Happy Birthday, ${user.name || 'Unknown'}! 🎉`,  // Use 'Unknown' if name is missing
          name: user.name || 'Unknown' // Ensure the name is included in the response
        }));
  
        // Send the response back to the frontend
        res.json(birthdayWishes);
      } else {
        res.json([]); // Send an empty array if no results found
      }
    } catch (error) {
      console.error('Error fetching birthday wishes:', error);
      res.status(500).send('Error fetching birthday wishes');
    }
  });
  
  

app.get('/thought-of-the-day', async (req, res) => {
    try {
        const pool = await poolPromise;
        const todayDayOfYear = moment().dayOfYear();  // Get current day of the year

        // Query to fetch all thoughts
        const result = await pool.request().query('SELECT id, thought FROM ThoughtsOfTheDay ORDER BY id');
        
        if (result.recordset.length > 0) {
            const thoughtIndex = todayDayOfYear % result.recordset.length;
            const thoughtOfTheDay = result.recordset[thoughtIndex];
            res.status(200).json({
                message: thoughtOfTheDay.thought,
                thought_id: thoughtOfTheDay.id,
            });
        } else {
            res.status(200).json({ message: "No thought of the day available!" });
        }
    } catch (err) {
        console.error('Error querying for Thought of the Day:', err);
        res.status(500).json({ message: "Error fetching thought of the day", error: err.message });
    }
});






app.post('/updateMenuCount', async (req, res) => {
    const { menuCount } = req.body;
  
    console.log(`Received menuCount: ${menuCount}`); // Log the received data
  
    if (menuCount < 1 || menuCount > 10) {
      return res.status(400).send("Invalid menu count. Must be between 1 and 10.");
    }
  
    try {
      // Establish connection to the database
      console.log("Connecting to the database...");
      const pool = await sql.connect(dbConfig);
      console.log("Connected to the database!");
  
      // SQL query to update the value in the database
      const result = await pool.request()
        .input('menuCount', sql.Int, menuCount)  // Ensure input is passed as Integer
        .query('UPDATE test_endvalue SET endvalue = @menuCount WHERE endvalue IS NOT NULL');
  
      console.log(result); // Log the result of the query
  
      if (result.rowsAffected > 0) {
        res.status(200).send("Menu count updated successfully!");
      } else {
        res.status(500).send("Error updating the database.");
      }
    } catch (err) {
      console.error('Database connection error:', err); // Log any database errors
      res.status(500).send("An error occurred while connecting to the database.");
    } finally {
      sql.close(); // Close the database connection
    }
  });
  



app.get('/api/settings', async (req, res) => {
    try {
        const pool = await sql.connect(config);  // Create connection pool
        const result = await pool.request().query('SELECT TOP 1 endvalue FROM test_endvalue');
        
        // Assuming that the first row has the value
        const totalmenus = result.recordset[0]?.endvalue || 0;  // Default to 0 if not found
        
        res.json({ totalmenus });  // Send the totalmenus value to the frontend
    } catch (err) {
        console.error('Database error:', err);
        res.status(500).json({ error: 'Failed to fetch settings from database' });
    }
});


app.post('/update-endvalue', (req, res) => {
  console.log('Received request to update endvalue'); // Log request

  const newValue = req.body.endvalue; // Get the new value from the request body
  console.log('New value:', newValue); // Log the new value to check

  // Update the database
  const query = 'UPDATE test_endvalue SET endvalue = ? WHERE endvalue = 12';
  db.query(query, [newValue], (err, result) => {
    if (err) {
      console.error('Error updating value:', err);
      return res.status(500).json({ error: 'Error updating value' });
    }

    res.status(200).json({ message: 'Value updated successfully' });
  });
});




app.get('/api/about-orient-exchange', async (req, res) => {
    try {
      
      const pool = await sql.connect(config);
  
      
      const result = await pool.request().query('SELECT content FROM about_orient_exchange WHERE id = 1');
  
      
      if (result.recordset.length > 0) {
        res.json({
          success: true,
          content: result.recordset[0].content,
        });
      } else {
        res.json({ success: false, message: 'No content found' });
      }
    } catch (err) {
      console.error('Error fetching content:', err); 
      res.status(500).json({ success: false, message: 'Internal server error' });
    }
  });




  
app.get('/country-info', async (req, res) => {
    try {
        
        let pool = await sql.connect(config);

        
        let result = await pool.request().query('SELECT * FROM COUNTRY_WISE_INFO');

        
        res.json(result.recordset);
    } catch (err) {
        console.error('Database query failed', err);
        res.status(500).send('Error fetching data');
    }
});



app.get('/product-info', async (req, res) => {
    const { product, mode } = req.query;

    
    if (!product || !mode) {
        return res.status(400).json({ error: "Product and disbursal mode are required" });
    }

    try {
        let pool = await sql.connect(config);

        
        let result = await pool.request()
            .input('product', sql.VarChar, product)
            .input('mode', sql.VarChar, mode)
            .query(`
                SELECT DESCRIPTION
                FROM COUNTRY_WISE_INFO
                WHERE PRODUCTS = @product AND DISBURSAL_MODE = @mode
            `);

        // Check if description exists
        if (result.recordset.length > 0) {
            res.json({ description: result.recordset[0].DESCRIPTION });
        } else {
            res.json({ description: "Description not available." });
        }
    } catch (err) {
        console.error('Error fetching data:', err);
        res.status(500).send('Error fetching data');
    }
});









app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
