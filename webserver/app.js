var express = require('express'),
mysql = require('mysql'),
bodyParser = require('body-parser'),
cors = require('cors'),
path = require('path');



const OAuth2Server = require('oauth2-server');
var user;

const Request = OAuth2Server.Request;
const Response = OAuth2Server.Response;

var util = require('util');
var authenticate = require('./authenticate')
var app = express();

var oauth = new OAuth2Server({
  model: require('./model.js')
});

/*
const MemoryStore = require('./model.js')

  app.oauth = new OAuth2Server({
  model: MemoryStore, 
  grants: ['password'],
  debug: true
}); */




var connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '',
  database: 'users'
});

connection.connect();
/*

//app.oauth = new OAuth2Server({model: model});
const MemoryStore = require('./model.js')

/*
app.oauth = new OAuth2Server({
	model: MemoryStore // See https://github.com/oauthjs/node-oauth2-server for specification
})
*/
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use(oauth.authorize());
app.use(cors());

module.exports = function(app){
  app.all('/oauth/token', function(req,res,next){
    var request = new Request(req);
    var response = new Response(res);

    oauth
      .token(request,response)
      .then(function(token) {
        // Todo: remove unnecessary values in response
        return res.json(token)
      }).catch(function(err){
        return res.status(500).json(err)
      })
  });

  app.post('/authorise', function(req, res){
    var request = new Request(req);
    var response = new Response(res);

    return oauth.authorize(request, response).then(function(success) {
      //  if (req.body.allow !== 'true') return callback(null, false);
      //  return callback(null, true, req.user);
        res.json(success)
    }).catch(function(err){
      res.status(err.code || 500).json(err)
    })
  });

  app.get('/authorise', function(req, res) {
    return db.OAuthClient.findOne({
        where: {
          client_id: req.query.client_id,
          redirect_uri: req.query.redirect_uri,
        },
        attributes: ['id', 'name'],
      })
      .then(function(model) {
        if (!model) return res.status(404).json({ error: 'Invalid Client' });
        return res.json(model);
      }).catch(function(err){
        return res.status(err.code || 500).json(err)
      });
  });
}
app.get('/secure', authenticate(), function(req,res){
  res.json({message: 'Secure data'})
});

app.get('/hallo', authenticate(), function (req, res) {
  connection.query('SELECT * FROM tbl_test', function (err, rows) {
    console.log(rows);
    res.send(JSON.stringify(rows));
  });
});
/*

app.use('/secret', function(req, res) {
  res.send('Secret area');
});
*/
/*



// Post token.
app.post('/oauth/token', app.oauth.token());

// Get authorization.
app.get('/oauth/authorize', function(req, res) {
  // Redirect anonymous users to login page.
  if (!req.app.locals.user) {
    return res.redirect(util.format('/login?redirect=%s&client_id=%s&redirect_uri=%s', req.path, req.query.client_id, req.query.redirect_uri));
  }

  return render('authorize', {
    client_id: req.query.client_id,
    redirect_uri: req.query.redirect_uri
  });
});

// Post authorization.
app.post('/oauth/authorize', function(req, res) {
  // Redirect anonymous users to login page.
  if (!req.app.locals.user) {
    return res.redirect(util.format('/login?client_id=%s&redirect_uri=%s', req.query.client_id, req.query.redirect_uri));
  }

  return app.oauth.authorize();
});

// Get login.
app.get('/login', function(req) {
  return render('login', {
    redirect: req.query.redirect,
    client_id: req.query.client_id,
    redirect_uri: req.query.redirect_uri
  });
});

// Post login.
app.post('/login', function(req, res) {
  // @TODO: Insert your own login mechanism.
  if (req.body.email !== 'thom@nightworld.com') {
    return render('login', {
      redirect: req.body.redirect,
      client_id: req.body.client_id,
      redirect_uri: req.body.redirect_uri
    });
  }

  // Successful logins should send the user back to /oauth/authorize.
  var path = req.body.redirect || '/home';

  return res.redirect(util.format('/%s?client_id=%s&redirect_uri=%s', path, req.query.client_id, req.query.redirect_uri));
});

// Get secret.
app.get('/secret', app.oauth.authenticate(), function(req, res) {
  // Will require a valid access_token.
  res.send('Secret area');
});
*/






 app.use( express.static(__dirname + '/public/website'));










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






/*
app.post('/lol', function (req, res) {
  var username = req.body.name;

var usrname = JSON.stringify(username);
console.log(usrname);
  connection.query('INSERT INTO users VALUES (0,' + usrname + ', "koks", "koks@koks.de", 27)', function (err, rows) {
    
  });

});*/




app.post('/test', function (req, res) {
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

app.post('/logintest', function (req, res) {
  var nm = JSON.stringify(req.body.name);
  var pw = JSON.stringify(req.body.password);
  var nm2 = req.body.name;
  var pw2 = req.body.password;
  var someVar = [];

  connection.query('SELECT * FROM tbl_test WHERE Password='+pw+' '+'&& Name='+nm, function(err, rows){
    if(err) {
      throw err;
    } else {
      setValue(rows);
    }
    function setValue(value) {
      someVar = value;
      if(someVar[0] !== undefined ){
      console.log(someVar[0].Name);
      }
    }
    if(someVar[0] === undefined){
      res.redirect('/');
  }
  });


 });
  

var options = { 
  useErrorHandler: false, 
  continueMiddleware: false,
}

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

