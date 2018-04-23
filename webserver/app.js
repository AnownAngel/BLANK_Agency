
var express = require('express'),
app = express(),
mysql = require('mysql'),
bodyParser = require('body-parser'),
cors = require('cors');
var path = require('path');
// oauthserver = require('oauth2-server');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());
/* app.use(function(req, res, next) {
  if (allowed(req.ip))
    next();
  else
    res.status(403).end('forbidden');
}); */

/* app.oauth = oauthserver({
  model: require('./model'), 
  grants: ['password'],
  debug: true
}); */
 app.use( express.static(__dirname + '/public/website'));

// app.all('/oauth/token', app.oauth.grant());


var connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '',
  database: 'users'
});

connection.connect();



app.get('/', function(req, res){
	res.sendFile(path.join(__dirname + '/public/website/index.html'));
});
app.get('/users', function(req, res){
	res.sendFile(path.join(__dirname + '/public/website/index.html'));
});
app.get('/project', function(req, res){
	res.sendFile(path.join(__dirname + '/public/website/index.html'));
});
app.get('/test', function(req, res){
	res.sendFile(path.join(__dirname + '/public/website/index.html'));
});
app.get('/login', function(req, res){
	res.sendFile(path.join(__dirname + '/public/website/index.html'));
});
app.get('/registration', function(req, res){
	res.sendFile(path.join(__dirname + '/public/website/index.html'));
});


app.get('/hallo', /* app.oauth.authorise(), */ function (req, res) {

  connection.query('SELECT * FROM tbl_test', function (err, rows) {
    console.log(rows);
    res.send(JSON.stringify(rows));
  });

});



app.post('/lol', /* app.oauth.authorise(), */ function (req, res) {
  var username = req.body.name;

var usrname = JSON.stringify(username);
console.log(usrname);
  connection.query('INSERT INTO users VALUES (0,' + usrname + ', "koks", "koks@koks.de", 27)', function (err, rows) {
    
  });

});




app.post('/test', /* app.oauth.authorise(), */ function (req, res) {
  var testName = req.body.name;
  var testPw = req.body.password;
  var testEmail = req.body.email;
  var testAge = req.body.age;
  var testName2 = JSON.stringify(testName);
  var testPw2 = JSON.stringify(testPw);
  var testEmail2 = JSON.stringify(testEmail);
  var testAge2 = JSON.stringify(testAge);
  connection.query('INSERT INTO tbl_test (Name, Password, Email, Age) VALUES (' + testName2 + ', ' + testPw2 + ', ' + testEmail2 + ', ' + testAge2 + ')', function (err, rows) {
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


app.get('/data', function (req, res) {
  console.log(users.users);
  res.send(users.users);

});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

