const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = 4000;

app.use(bodyParser.urlencoded({ extended: false }));

app.get("/form", (req, res) => {
    
  res.sendFile(path.join(__dirname + "/first.html"));
})

app.post('/response', (req, res) => {
    console.log(req.body);
    res.send(`<h1>this is name ${req.body.name}</h1>
    <h1>this is email ${req.body.email}</h1>
    <h1>this is password ${req.body.password}</h1>
    `);
})

app.get('/', (req, res) => {
    // console.log(req.url);
    res.send('<h1>This is your first express respones on web</h1>');
})

app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`);
})