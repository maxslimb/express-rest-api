var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mysql = require('mysql');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
extended: true
}));

// default route
app.get('/', function (req, res) {
return res.send({msg: "hello"})
});

// database connection config

var dbConn = mysql.createConnection({
host: 'localhost',
user: 'root',
password: 'password',
database: 'nodejs_login'
});
dbConn.connect(); 

// Retrieve all students 
app.get('/students', function (req, res) {
dbConn.query('SELECT * FROM students', function (error, results, fields) {
if (error) throw error;
return res.send(results);  // sending response of JSON Data
});
});
// set port
app.listen(3000, function () {
console.log('server is running on port 3000');
});
module.exports = app;