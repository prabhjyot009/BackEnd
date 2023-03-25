// Then, create an endpoint that retrieves all the data and prints them. Make this request from the browser, and the output should look like this:

var express = require('express');
var app = express();

const storage = require('node-persist');
var bodyParser = require('body-parser');

var jsonParser = bodyParser.json();
storage.init();

app.get('/allStudents', async (req, res) => {
  var allData = await storage.values();
  var allKeys = await storage.keys();
  var allDataString = "<h2>ALL STUDENTS DATA!</h2>";
  for (var i = 0; i < allData.length; i++) {
    allDataString += ` <h4>Student ID: ${allKeys[i]}</h4>
    <h5>Student Name: ${allData[i].student_name}</h5>
    <h6>GPA: ${allData[i].gpa}</h6>`;
  }
  res.send(allDataString);
});
app.listen(5000, () => { console.log("Server running on port 5000"); });
