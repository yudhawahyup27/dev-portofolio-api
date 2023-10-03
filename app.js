// Require
const express = require('express');
const bodyParser = require('body-parser');
const projectRoutes = require('./src/routes/projectRoutes')
const mysqlConnection = require('mysql2');
// Port
const PORT = process.env.PORT || 3000;
// Routes
const dotenv = require('dotenv');

const app = express();
dotenv.config(); // Menggunakan dotenv untuk membaca variabel lingkungan dari file .env




// Panggil konfigurasi database
const databaseConfig =  require('./src/config/database');
const db = mysqlConnection.createConnection(databaseConfig);
// Cek koneksi database
db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
  } else {
    console.log('Connected to MySQL');
  }
});

app.use(bodyParser.json())
app.use('/api', projectRoutes);
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});