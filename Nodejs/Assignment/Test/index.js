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

