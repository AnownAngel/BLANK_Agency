
var express = require('express'),
app = express();
mysql = require('mysql');
bodyParser = require('body-parser');
cors = require('cors');
oauthserver = require('oauth2-server');



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(cors());

/* app.oauth = oauthserver({
  model: require('./model'), 
  grants: ['password'],
  debug: true
}); 

app.all('/oauth/token', app.oauth.grant());*/


var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'users'
});

connection.connect();


var con2 = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'users_test'
});


con2.connect();







app.get('/hallo', /* app.oauth.authorise(), */ function (req, res) {

  connection.query('SELECT * FROM users', function (err, rows) {
    console.log(rows);
    res.send(rows);
  });

});



app.post('/lol', /* app.oauth.authorise(), */ function (req, res) {
  var username = req.body.name;
  var usrname = JSON.stringify(username);
  connection.query('INSERT INTO users VALUES (0,' + usrname + ', "koks", "koks@koks.de", 27)', function (err, rows) {
    console.log(usrname);
  });

});




app.post('/test', /* app.oauth.authorise(), */ function (req, res) {
  var test = req.body.name;
  var test2 = JSON.stringify(test);
  con2.query('INSERT INTO tbl_test VALUES (' + test2 + ')', function (err, rows) {
    console.log(test2);
  });

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

// app.use(app.oauth.errorHandler());

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

