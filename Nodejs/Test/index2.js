// var http = require('http');
// var fs = require("fs");

// http.createServer(function (req, res) {
//   fs.readFile('test.html', function (err, data) {
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     res.end(data);
//     res.write(data);
//     return res.end();
//   })
// }).listen(5000);

// let http = require('http');
// let fs = require('fs');
// let url = require('url');

// let addr = 'http://localhost:5000/default.html?name=singh';
// let result= url.parse(addr, true);
// console.log(result.search);
// console.log(result.host);
// console.log(result.pathname);
// console.log(result.query);

// let http = require('http');
// let fs = require('fs');
// let url = require('url');

// http.createServer(function (req, res) {
//   var inUrl= url.parse(req.url, true);
//   var filename = "." + inUrl.pathname;
//   fs.readFile(filename, function (err, data) {
//     if (err) {
//       res.writeHead(404, { 'Content-Type': 'text/html' });
//       return res.end("404 Not Found");
//     }
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     res.write(data);
//     return res.end();
//   });
// }).listen(5000);

// const url = require('url');

// const urlString = 'http://localhost:5000/default.html?id=009&name=Singh';

// // Parse the URL
// const parsedUrl = url.parse(urlString, true);

// // Retrieve the student's id and name from the query string
// const studentId = parsedUrl.query.id;
// const studentName = parsedUrl.query.name;

// console.log(`Student ID: ${studentId}`);
// console.log(`Student Name: ${studentName}`);

// var express = require('express');
// var app = express();

// app.get('/test', function (req, res) {
//   res.send('Hello World');
// });

// app.listen(5000, () => { console.log("Server running on port 5000"); });

// var express = require('express');
// var app = express();

// app.get('/test/:data', function (req, res) {
//   res.send(req.params);
// });

// app.listen(5000, () => { console.log("Server running on port 5000"); });


// var express = require('express');
// var app = express();

// const storage = require('node-persist');
// var bodyParser = require('body-parser');

// var jsonParser = bodyParser.json();
// storage.init();

// app.post('/studentsss',jsonParser, async(req, res) => {
//   const{student_id, student_name} = req.body;
//   await storage.setItem(student_id, student_name);
//   res.send("Student added successfully");
// });

// app.listen(2000, () => { console.log("Server running on port 5000"); });

// var express = require('express');
// var app = express();

// const storage = require('node-persist');
// var bodyParser = require('body-parser');

// var jsonParser = bodyParser.json();
// storage.init();

// app.get('/student/:id', async (req, res) => {
//   if((await storage.keys()).includes(req.params.id)){
//   res.send(await storage.getItem(req.params.id));}
//   else{
//     res.send("Student not found");
//   }

// });

// app.post('/student', jsonParser, async (req, res) => {
//   const { student_id, student_name } = req.body;
//   await storage.setItem(student_id, student_name);
//   res.send("Student added successfully");
// });

// app.listen(5000, () => { console.log("Server running on port 5000"); });


//I want to print the values of the following array in <h2> tags, each array element in one H2 element. How will I do that? const fruits = ['Apple', 'Orange', 'Grapes']; 

// const fruits = ['Apple', 'Orange', 'Grapes'];
// const fruitsList = fruits.map((fruit) => `<h2>${fruit}</h2>`).join('');
// console.log(fruitsList);

