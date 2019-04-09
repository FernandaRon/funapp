var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var databaseInfo = require('../mysql')

var app = express();



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, '../public/src')))

app.get('/', function(req, res){
  res.send('Hello World');
});

app.get('infoFromDatabase', function (req, res) {
databaseInfo.
})

app.listen(3000, function(){
  console.log('Server Started on Port 3000....');
})
