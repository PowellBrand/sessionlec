const express = require('express')
, bodyParser = require('body-parser')
, session = require('express-session')

const app = express();
app.use(bodyParser.json());

let port = 3004;
app.listen(port, ()=> console.log(`listening on port ${port}.`))