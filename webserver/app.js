
var express = require('express');
var mysql      = require('mysql');
var cors = require('cors');
var app = express();
app.use(express.static('public'));
app.use(cors());



app.get('/hallo', function (req, res) {
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database: 'users'
});



  connection.connect();
connection.query('SELECT * FROM users', function(err, rows) {
  console.log(rows);
  res.send(rows);
});
connection.end();
});






var users = {
  "users": [
    {
      "id": 1,
      "age": 16,
      "name": "Andy"
    },
    {
      "id": 2,
      "age": 22,
      "name": "Lisa"
    }
  ],
  "example2": [
    {
      "id": 1,
      "date": "03-18-2016",
      "message": "Nice!"
    },
    {
      "id": 2,
      "date": "06-21-2017",
      "message": "Great view!"
    }
  ]
};

/* var users3 = {
  "user":
    {
      "Name": "Shiro",
      "Vorname": "Shibo",
      "Alter": 42
    }
}

var users4 = [
  {
    "id": 1,
    "age": 16,
    "name": "Andy"
  },
  {
    "id": 2,
    "age": 22,
    "name": "Lisa"
  }
] */


app.get('/users', function (req, res) {
  console.log(users.users);
  res.send(users.users);

});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

