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