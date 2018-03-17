
var express    = require('express');
var app        = express();
var mysql      = require('mysql');
var bodyParser = require('body-parser');
var cors = require('cors');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));
app.use(cors());



var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'users'
});

connection.connect();






app.get('/hallo', function (req, res) {
  
  connection.query('SELECT * FROM users', function (err, rows) {
    console.log(rows);
    res.send(rows);   
  });
  
});



app.post('/lol', function(req, res){
  var username=req.body.name;
  var usrname = JSON.stringify(username);
  connection.query('INSERT INTO users (id, name, password, email, age) VALUES (0, "usrname", "koks", "koks@koks.de", 27)');
    console.log(usrname);
    console.log(username);
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

