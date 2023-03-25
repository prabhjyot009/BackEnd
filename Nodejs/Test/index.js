// Create a POST request that accepts the following student details: student ID (should be unique), Student name, GPA Use postman to make these requests and populate the storage.

var express = require('express');
var app = express();

const storage = require('node-persist');
var bodyParser = require('body-parser');

var jsonParser = bodyParser.json();
storage.init();

app.post('/student', jsonParser, async (req, res) => {
  const { student_id, student_name, gpa } = req.body;
  if ((await storage.keys()).includes(student_id)) {
    res.send("Student already exists");
  }
  else {
    await storage.setItem(student_id, { student_name, gpa });
    res.send("Student added successfully");
  }
});
app.listen(5000, () => { console.log("Server running on port 5000"); });

// Then, create an endpoint that retrieves all the data and prints them. Make this request from the browser, and the output should look like this:

var express = require('express');
var app = express();

const storage = require('node-persist');
var bodyParser = require('body-parser');

var jsonParser = bodyParser.json();
storage.init();

app.get('/student', async (req, res) => {
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

// Then, create another GET request that retrieves the data of a particular student, and pnnts just that Make this request from the browser as well, and It should look like this.


var express = require('express');
var app = express();

const storage = require('node-persist');
var bodyParser = require('body-parser');

var jsonParser = bodyParser.json();
storage.init();

app.get('/student/:id', async (req, res) => {
  if ((await storage.keys()).includes(req.params.id)) {
    var studentData = await storage.getItem(req.params.id);
    res.send(`
    <h2>"Student Detials"</h2>
    <h4>Student ID: ${req.params.id}</h4>
    <h5>Student Name: ${studentData.student_name}</h5>
    <h6>GPA: ${studentData.gpa}</h6>`);
  }
  else {
    res.send("Student not found");
  }

}
);

app.listen(5000, () => { console.log("Server running on port 5000"); });

// Finally, create an endpoint that looks for the topper among the class. For this, all the data should be retrieved and sifted through, and in the browser, display the ID and the  name of the student with the highest GPA.


var express = require('express');
var app = express();

const storage = require('node-persist');
var bodyParser = require('body-parser');

var jsonParser = bodyParser.json();
storage.init();

app.get('/topper', async (req, res) => {
  var allData = await storage.values();
  var allKeys = await storage.keys();
  var topper = allData[0];
  var topperID = allKeys[0];
  for (var i = 0; i < allData.length; i++) {
    if (allData[i].gpa > topper.gpa) {
      topper = allData[i];
      topperID = allKeys[i];
    }
  }
  res.send(`
  <h2>Student Detail</h2>
  <h4>Student ID: ${topperID}</h4>
  <h5>Student Name: ${topper.student_name}</h5>
  <h6>GPA: ${topper.gpa}</h6>`);
});

app.listen(5000, () => { console.log("Server running on port 5000"); });