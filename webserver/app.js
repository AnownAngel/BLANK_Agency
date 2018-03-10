
var express = require('express');
var cors = require('cors');
var app = express();
app.use(express.static('public'));
app.use(cors());



var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'SqL!2018',
  database: 'users'
});

connection.connect();
var query = 'SELECT * FROM USERS';

connection.query(query, function (err, rows, fields) {
  if (err) throw err;
  app.get('/hallo', function (req, res) {
    console.log(users.users);
    for (var i in rows) {
      console.log('User ID: ', rows[i].id, 'User Name:', rows[i].name);
      var id = rows[i].id;
      var name = rows[i].name;
  }
    res.send(id, name);
  
  });

});

connection.end();



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

