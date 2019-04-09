var mysql = require('mysql');

var connection = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'Holacode1',
  database:'test'
});


var getInfoFromDatabase = function (callback) {
  connection.query('SELECT * FROM test', function (err,results) {
    if (err) {
      callback(err,null);
    } else {
      callback(null,results)
    }
  });
};

module.exports.getInfoFromDatabase = getInfoFromDatabase;
