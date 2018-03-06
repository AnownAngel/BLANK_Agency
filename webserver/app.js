
var express = require('express');
var cors = require('cors');
var app = express();
app.use(express.static('public'));
app.use(cors());
var users2 = {
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
  }

  var users3 = {
    "user":
    {
      "Name": "Shiro",
      "Vorname": "Shibo",
      "Alter": 42
    }
  }

  var users = [
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
  ]
  

app.get('/users', function (req, res) {

  res.send(users);
  console.log(users);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

