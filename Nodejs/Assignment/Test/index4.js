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