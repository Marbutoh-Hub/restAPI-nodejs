const mysql = require('mysql2');

// Membuat configurasi koneksi
const dbPool = mysql.createPool({
    host:process.env.DB_HOST,
    user:process.env.DB_USERNAME,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_NAME
});


// Export module
module.exports = dbPool.promise();