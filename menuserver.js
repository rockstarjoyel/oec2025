// const express = require('express');
// const mssql = require('mssql');
// const bodyParser = require('body-parser');
// const multer = require('multer');
// const path = require('path');
// const fs = require('fs');



// const cors = require('cors');  // Import cors

// const app = express();
// const port = 3006;

// // Set up middleware
// app.use(bodyParser.json());
// app.use(cors({
//   methods: ['GET', 'POST', 'PUT', 'DELETE'],  // Allow PUT method
//   origin: '*',  // Allow all origins
// }));

// // Set up MSSQL connection configuration
// const config = {
//   user: 'OECTEST',
//   password: 'TesT99$',
//   server: 'OECSERVER4',
//   database: 'DEV_TEST',
//   options: {
//     encrypt: false,
//     trustServerCertificate: true,
//     enableArithAbort: true
//   }
// };





// // Route to fetch submenu items for a specific parent menu
// app.get('/getSubMenu/:parentId', async (req, res) => {
//   const parentId = req.params.parentId;
//   try {
//     const pool = await mssql.connect(config);
//     const result = await pool.request()
//       .input('parentId', mssql.Int, parentId)
//       .query('SELECT id, name FROM menu_items WHERE parent_id = @parentId');

//     res.status(200).json(result.recordset);
//   } catch (error) {
//     console.error('Error fetching submenus:', error);
//     res.status(500).json({ message: 'Error fetching submenus' });
//   } finally {
//     mssql.close();
//   }
// });




// app.get('/getAllMenus', async (req, res) => {
//   try {
//     const pool = await mssql.connect(config);
//     const result = await pool.request().query("SELECT id, name, parent_id FROM menu_items");

//     // Set the content type to application/json explicitly
//     res.setHeader('Content-Type', 'application/json');

//     // Send the result as JSON
//     res.status(200).json(result.recordset);
//   } catch (error) {
//     console.error('Error fetching all menu items:', error);
//     res.status(500).json({ message: 'Error fetching all menu items' });
//   } finally {
//     mssql.close();
//   }
// });



// app.get('/getChildMenus', async (req, res) => {
//   try {
//     const submenuId = req.query.submenuId;

//     if (!submenuId) {
//       return res.status(400).json({ message: 'submenuId is required' });
//     }

//     const pool = await mssql.connect(config);
//     const result = await pool
//       .request()
//       .input('submenuId', mssql.Int, submenuId) // Use parameterized queries to prevent SQL injection
//       .query('SELECT id, name FROM menu_items WHERE parent_id = @submenuId');

//     res.setHeader('Content-Type', 'application/json');
//     res.status(200).json(result.recordset); // Return the filtered child menus
//   } catch (error) {
//     console.error('Error fetching child menus:', error);
//     res.status(500).json({ message: 'Error fetching child menus' });
//   } finally {
//     mssql.close();
//   }
// });


// app.post('/addMenu', async (req, res) => {
//   const { name, parent_id } = req.body;

//   // Automatically set these fields
//   const createdAt = new Date(); // current date and time
//   const updatedAt = new Date(); // current date and time
//   const userId = 123; // fixed user ID
//   const level = 0; // fixed level for parent menu

//   // Automatically generate the URL based on the name, in lowercase and prefixed with '/'
//   const url = `/` + name.toLowerCase().replace(/\s+/g, '-'); // Replace spaces with dashes

//   try {
//     const pool = await mssql.connect(config);

//     // SQL query to insert the new menu into the database
//     const result = await pool.request()
//       .input('name', mssql.NVarChar, name)
//       .input('url', mssql.NVarChar, url)
//       .input('parent_id', mssql.Int, parent_id)
//       .input('user_id', mssql.Int, userId)
//       .input('level', mssql.Int, level)
//       .input('created_at', mssql.DateTime, createdAt)
//       .input('updated_at', mssql.DateTime, updatedAt)
//       .query('INSERT INTO menu_items (name, url, parent_id, user_id, level, created_at, updated_at) VALUES (@name, @url, @parent_id, @user_id, @level, @created_at, @updated_at)');

//     res.status(200).json({ message: 'Menu added successfully', id: result.recordset.insertId });
//   } catch (error) {
//     console.error('Error adding menu:', error);
//     res.status(500).json({ message: 'Error adding menu' });
//   } finally {
//     mssql.close();
//   }
// });





// app.post('/addSubMenu', async (req, res) => {
//   const { name, parent_id } = req.body;

//   // Automatically set these fields
//   const createdAt = new Date(); // current date and time
//   const updatedAt = new Date(); // current date and time
//   const userId = 123; // fixed user ID
//   const level = 1; // default level for a submenu

//   try {
//     const pool = await mssql.connect(config);

//     // Fetch parent menu name to generate the URL
//     let parentMenuName = '';
//     if (parent_id) {
//       const parentResult = await pool.request()
//         .input('parent_id', mssql.Int, parent_id)
//         .query('SELECT name FROM menu_items WHERE id = @parent_id');
      
//       if (parentResult.recordset.length > 0) {
//         parentMenuName = parentResult.recordset[0].name;
//       } else {
//         return res.status(400).json({ message: 'Parent menu not found' });
//       }
//     }

//     // Generate the URL for the submenu
//     const url = parentMenuName ? `/${parentMenuName.toLowerCase().replace(/\s+/g, '-')}/${name.toLowerCase().replace(/\s+/g, '-')}` : `/${name.toLowerCase().replace(/\s+/g, '-')}`;

//     // Insert new submenu into the database
//     const result = await pool.request()
//       .input('name', mssql.NVarChar, name)
//       .input('parent_id', mssql.Int, parent_id)
//       .input('user_id', mssql.Int, userId)
//       .input('level', mssql.Int, level)
//       .input('url', mssql.NVarChar, url) // Store the dynamically generated URL
//       .input('created_at', mssql.DateTime, createdAt)
//       .input('updated_at', mssql.DateTime, updatedAt)
//       .query(
//         'INSERT INTO menu_items (name, parent_id, user_id, level, url, created_at, updated_at) VALUES (@name, @parent_id, @user_id, @level, @url, @created_at, @updated_at)'
//       );

//     res.status(201).json({ message: 'Submenu added successfully', data: result.recordset });
//   } catch (error) {
//     console.error('Error adding submenu:', error);
//     res.status(500).json({ message: 'Error adding submenu', error: error.message });
//   } finally {
//     mssql.close();
//   }
// });





// app.post('/addChildMenu', async (req, res) => {
//   const { name, parent_id } = req.body;

//   // Automatically set these fields
//   const createdAt = new Date();
//   const updatedAt = new Date();
//   const userId = 123; // Fixed user ID for now
//   const level = 2; // Fixed level for child menu

//   try {
//       const pool = await mssql.connect(config);

//       // Fetch the parent submenu's details
//       const submenuResult = await pool.request()
//           .input('parent_id', mssql.Int, parent_id)
//           .query('SELECT name, parent_id FROM menu_items WHERE id = @parent_id');

//       if (submenuResult.recordset.length === 0) {
//           return res.status(400).json({ message: 'Submenu not found' });
//       }

//       const submenu = submenuResult.recordset[0];

//       // Fetch the parent menu's name
//       const parentMenuResult = await pool.request()
//           .input('parent_id', mssql.Int, submenu.parent_id)
//           .query('SELECT name FROM menu_items WHERE id = @parent_id');

//       if (parentMenuResult.recordset.length === 0) {
//           return res.status(400).json({ message: 'Parent menu not found' });
//       }

//       const parentMenuName = parentMenuResult.recordset[0].name;

//       // Generate the URL
//       const url = `/${parentMenuName.toLowerCase().replace(/\s+/g, '-')}/${submenu.name.toLowerCase().replace(/\s+/g, '-')}/${name.toLowerCase().replace(/\s+/g, '-')}`;

//       // Insert the child menu into the database
//       await pool.request()
//           .input('name', mssql.NVarChar, name)
//           .input('parent_id', mssql.Int, parent_id)
//           .input('user_id', mssql.Int, userId)
//           .input('level', mssql.Int, level)
//           .input('url', mssql.NVarChar, url)
//           .input('created_at', mssql.DateTime, createdAt)
//           .input('updated_at', mssql.DateTime, updatedAt)
//           .query(`
//               INSERT INTO menu_items (name, parent_id, user_id, level, url, created_at, updated_at)
//               VALUES (@name, @parent_id, @user_id, @level, @url, @created_at, @updated_at)
//           `);

//       res.status(201).json({ message: 'Child menu added successfully', url });
//   } catch (error) {
//       console.error('Error adding child menu:', error);
//       res.status(500).json({ message: 'Error adding child menu', error: error.message });
//   } finally {
//       mssql.close();
//   }
// });





// app.post('/editMenu', async (req, res) => {
//   const { id, name } = req.body; // Accept 'name' instead of 'newName'

//   if (!id || !name) {
//     console.error('Invalid input data:', req.body);
//     return res.status(400).json({ message: 'Invalid input data' });
//   }

//   try {
//     const pool = await mssql.connect(config);
//     await pool.request()
//       .input('id', mssql.Int, id)
//       .input('name', mssql.NVarChar, name)
//       .input('updatedAt', mssql.DateTime, new Date())
//       .query('UPDATE menu_items SET name = @name, updated_at = @updatedAt WHERE id = @id');

//     res.status(200).json({ message: 'Menu updated successfully!' });
//   } catch (error) {
//     console.error('Error updating menu:', error);
//     res.status(500).json({ message: 'Error updating menu' });
//   } finally {
//     mssql.close();
//   }
// });




// // Route to handle editSubMenu
// app.post('/editSubMenu', async (req, res) => {
//   const { id, name } = req.body;

//   // Validate input
//   if (!id || !name) {
//     return res.status(400).json({ success: false, message: 'Invalid input' });
//   }

//   try {
//     // Log the request body for debugging
//     console.log('Received request to update submenu:', req.body);

//     // Connect to SQL Server
//     const pool = await mssql.connect(config);
//     const result = await pool.request()
//       .input('id', mssql.Int, id)
//       .input('name', mssql.NVarChar, name)
//       .query('UPDATE menu_items SET name = @name WHERE id = @id AND parent_id IS NOT NULL');
    
//     // Log the result to verify if any rows were affected
//     console.log('Rows affected:', result.rowsAffected);

//     // Check if the submenu was updated
//     if (result.rowsAffected[0] > 0) {
//       return res.json({ success: true, message: 'Submenu updated successfully!' });
//     } else {
//       return res.status(404).json({ success: false, message: 'Submenu not found or parent_id is NULL' });
//     }
//   } catch (err) {
//     console.error('Database error:', err);
//     return res.status(500).json({ success: false, message: 'Database error' });
//   } finally {
//     // Close the SQL connection
//     mssql.close();
//   }
// });




// app.post('/editChildMenu', async (req, res) => {
//   const { id, name } = req.body;

//   // Validate input
//   if (!id || !name) {
//     return res.status(400).json({ success: false, message: 'Invalid input' });
//   }

//   try {
//     // Connect to SQL Server
//     const pool = await mssql.connect(config);
//     const result = await pool.request()
//       .input('id', mssql.Int, id)
//       .input('name', mssql.NVarChar, name)
//       .query('UPDATE menu_items SET name = @name WHERE id = @id AND parent_id IS NOT NULL');
    
//     // Check if the child menu was updated
//     if (result.rowsAffected > 0) {
//       return res.json({ success: true, message: 'Child menu updated successfully!' });
//     } else {
//       return res.status(404).json({ success: false, message: 'Child menu not found' });
//     }
//   } catch (err) {
//     console.error('Database error:', err);
//     return res.status(500).json({ success: false, message: 'Database error' });
//   } finally {
//     mssql.close();
//   }
// });



// app.delete('/deleteMenu', async (req, res) => {
//   const { id } = req.body;

//   if (!id) {
//     return res.status(400).json({ success: false, message: 'ID is required' });
//   }

//   try {
//     const pool = await mssql.connect(config);

//     // Backup child menus and submenus
//     await pool.request()
//       .input('parent_id', mssql.Int, id)
//       .query(`
//         INSERT INTO menu_items_backup (id, parent_id, name, url, user_id, level, created_at, updated_at, PATH, deleted_at)
//         SELECT id, parent_id, name, url, user_id, level, created_at, updated_at, PATH, GETDATE()
//         FROM menu_items
//         WHERE parent_id = @parent_id AND (level = 1 OR level = 2)
//       `);

//     // Delete child menus and submenus
//     await pool.request()
//       .input('parent_id', mssql.Int, id)
//       .query(`
//         DELETE FROM menu_items
//         WHERE parent_id = @parent_id AND (level = 1 OR level = 2)
//       `);

//     // Backup the parent menu
//     await pool.request()
//       .input('id', mssql.Int, id)
//       .query(`
//         INSERT INTO menu_items_backup (id, parent_id, name, url, user_id, level, created_at, updated_at, PATH, deleted_at)
//         SELECT id, parent_id, name, url, user_id, level, created_at, updated_at, PATH, GETDATE()
//         FROM menu_items
//         WHERE id = @id AND level = 0
//       `);

//     // Delete the parent menu
//     const result = await pool.request()
//       .input('id', mssql.Int, id)
//       .query(`
//         DELETE FROM menu_items
//         WHERE id = @id AND level = 0
//       `);

//     if (result.rowsAffected[0] === 0) {
//       return res.status(404).json({ success: false, message: 'Menu not found or already deleted' });
//     }

//     res.status(200).json({ success: true, message: 'Menu and its submenus/child menus deleted and backed up successfully' });
//   } catch (error) {
//     console.error('Error deleting menu:', error);
//     res.status(500).json({ success: false, message: 'Error deleting menu and its submenus/child menus' });
//   } finally {
//     mssql.close();
//   }
// });




// app.post('/delete-child-menu', async (req, res) => {
//   const { id } = req.body;

//   if (!id) {
//     return res.status(400).json({ success: false, message: 'ID is required' });
//   }

//   try {
//     const pool = await mssql.connect(config);

//     // Backup the child menu
//     await pool.request()
//       .input('id', mssql.Int, id)
//       .query(`
//         INSERT INTO menu_items_backup (id, parent_id, name, url, user_id, level, created_at, updated_at, PATH, deleted_at)
//         SELECT id, parent_id, name, url, user_id, level, created_at, updated_at, PATH, GETDATE()
//         FROM menu_items
//         WHERE id = @id
//       `);

//     // Delete the child menu
//     const result = await pool.request()
//       .input('id', mssql.Int, id)
//       .query(`
//         DELETE FROM menu_items
//         WHERE id = @id
//       `);

//     if (result.rowsAffected[0] === 0) {
//       return res.status(404).json({ success: false, message: 'Child menu not found or already deleted' });
//     }

//     res.status(200).json({ success: true, message: 'Child menu deleted and backed up successfully' });
//   } catch (error) {
//     console.error('Error deleting child menu:', error);
//     res.status(500).json({ success: false, message: 'Error deleting child menu' });
//   } finally {
//     mssql.close();
//   }
// });

         
// app.delete('/deleteSubmenu', async (req, res) => {
//   const { id } = req.body;

//   if (!id) {
//     return res.status(400).json({ success: false, message: 'ID is required' });
//   }

//   try {
//     const pool = await mssql.connect(config);

//     // Backup the submenu
//     await pool.request()
//       .input('id', mssql.Int, id)
//       .query(`
//         INSERT INTO menu_items_backup (id, parent_id, name, url, user_id, level, created_at, updated_at, PATH, deleted_at)
//         SELECT id, parent_id, name, url, user_id, level, created_at, updated_at, PATH, GETDATE()
//         FROM menu_items
//         WHERE id = @id
//       `);

//     // Delete the submenu
//     const result = await pool.request()
//       .input('id', mssql.Int, id)
//       .query(`
//         DELETE FROM menu_items
//         WHERE id = @id
//       `);

//     if (result.rowsAffected[0] === 0) {
//       return res.status(404).json({ success: false, message: 'Submenu not found or already deleted' });
//     }

//     res.status(200).json({ success: true, message: 'Submenu deleted and backed up successfully' });
//   } catch (error) {
//     console.error('Error deleting submenu:', error);
//     res.status(500).json({ success: false, message: 'Error deleting submenu' });
//   } finally {
//     mssql.close();
//   }
// });



// // Serve static files (your HTML, CSS, and JS files)
// app.use(express.static('public'));





// // Define the base upload path where files will be stored
// const baseUploadPath = '\\\\192.168.140.154\\share';  // Ensure this path is accessible from your server



// // Ensure the base folder exists
// if (!fs.existsSync(baseUploadPath)) {
//   fs.mkdirSync(baseUploadPath, { recursive: true });
// }

// // Configure multer to store files in dynamic folders
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     const folderName = Date.now().toString(); // Use the timestamp for unique folder name
//     const folderPath = path.join(baseUploadPath, folderName); // Path to the new folder
    
//     // Ensure the folder exists
//     if (!fs.existsSync(folderPath)) {
//       fs.mkdirSync(folderPath, { recursive: true }); // Create the new folder
//     }

//     cb(null, folderPath); // Set the destination folder for the file
//   },
//   filename: (req, file, cb) => {
//     cb(null, file.originalname); // Keep the original file name
//   }
// });

// const upload = multer({ storage: storage });
// app.post('/upload', (req, res, next) => {
//   // Generate a unique timestamp once at the start and store it in req object
//   req.folderName = Date.now().toString(); // Generate folder name based on timestamp
//   next(); // Continue to Multer middleware
// }, upload.single('file'), async (req, res) => {
//   console.log('Request body:', req.body); // Log the entire form data
//   console.log('File:', req.file); // This logs the file metadata object

//   const { submenuId, childMenuId } = req.body;

//   if (!submenuId && !childMenuId) {
//     return res.status(400).json({ message: 'Either submenuId or childMenuId must be provided.' });
//   }

//   if (!req.file) {
//     return res.status(400).json({ message: 'No file uploaded.' });
//   }

//   // Get the absolute path from Multer
//   const absoluteFilePath = req.file.path;

//   // Strip the network share part (e.g., \\192.168.140.154\share)
//   const relativeFilePath = absoluteFilePath.replace('\\\\192.168.140.154\\share', '');

//   // Log the relative file path that will be stored in the database
//   console.log(`Relative file path to store in DB: ${relativeFilePath}`);

//   try {
//     // Connect to the database
//     await mssql.connect(config);
  
//     const request = new mssql.Request();
//     request.input('filePath', mssql.NVarChar, relativeFilePath); // Store the relative path in the URL column
//     request.input('networkPath', mssql.NVarChar, absoluteFilePath); // Store the full network path in the PATH column
//     request.input('submenuId', mssql.Int, submenuId); // submenuId as a parameter
//     request.input('childMenuId', mssql.Int, childMenuId); // childMenuId as a parameter
  
//     // Database update query to update both URL and PATH columns
//     const updateQuery = `
//       UPDATE MENU_ITEMS
//       SET 
//         URL = @filePath,  -- Keep the relative path in the URL column
//         PATH = @networkPath -- Store the full network path in the PATH column
//       WHERE ID = @submenuId OR ID = @childMenuId
//     `;
  
//     const result = await request.query(updateQuery);
//     console.log('Database updated successfully:');
//     console.log(`URL column updated with relative path: ${relativeFilePath}`);
//     console.log(`PATH column updated with network path: ${absoluteFilePath}`);
  
//     // Send response back to client
//     res.json({
//       message: 'File uploaded successfully',
//       file: {
//         filename: req.file.originalname,
//         relativePath: relativeFilePath, // Send the relative path to the client
//         networkPath: absoluteFilePath  // Send the network path to the client
//       },
//       submenuId: submenuId || null,
//       childMenuId: childMenuId || null
//     });
//   } catch (err) {
//     console.error('Error updating database:', err);
//     res.status(500).json({ message: 'Database update failed.' });
//   } finally {
//     mssql.close();
//   }
  
// });



// app.get('/files/:folder/:filename', (req, res) => {
//   const { folder, filename } = req.params;

//   // Construct the full file path using the folder and filename
//   const filePath = path.join(baseUploadPath, folder, filename);

//   console.log(`Attempting to serve file from: ${filePath}`);

//   // Convert Windows backslashes to forward slashes for the URL
//   const correctedFilePath = filePath.replace(/\\/g, '/');

//   if (fs.existsSync(correctedFilePath)) {
//     console.log('File found:', correctedFilePath);
//     res.sendFile(correctedFilePath); // Serve the file with corrected path
//   } else {
//     console.error('File not found:', correctedFilePath);
//     res.status(404).json({ message: 'File not found.', requestedPath: correctedFilePath });
//   }
// });


// // Start the server
// app.listen(port, () => {
//   console.log(`Server running on http://localhost:${port}`);
// });

