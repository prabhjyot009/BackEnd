const mysql = require('mysql');

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'shop'
});

conn.connect(function (err) {
    if (err) {
        throw err;
    }

    console.log('Connected!');
})

conn.query('SELECT * FROM products', function (err, result,fields) {
    if (err) {
        console.log(err);
    }
    console.warn(result);
    console.warn(fields);
});