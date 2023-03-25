var express = require('express');
var app = express();
const storage = require('node-persist');
var bodyParser = require('body-parser');

const cors=require('cors');
app.use(cors());

var jsonParser = bodyParser.json();
storage.init();

app.get('/student', async (req, res) => {
    res.send(await storage.values());
});

app.post('/student', jsonParser, async (req, res) => {
const{student_id, student_name}=req.body;
    await storage.setItem(student_id, student_name);
    res.send("Added student successfully!");
});

app.listen(3000, () => console.log('Server started on port 3000'));

//how to run this code?
//1. open cmd
//2. cd Internship\BackEnd\ReactTest\my-react-app
//3. npm start
//4. open another cmd
//5. cd Internship\BackEnd\ReactTest\my-react-app
//6. node index.js

//postman code to test the api is given below
//POST http://localhost:3000/student
//Content-Type: application/json
//
//{"student_id":"1","student_name":"John"}

