const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const db = require('./conf');

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, Content-Type');
  res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
  next();
});

app.get('/portfolio/projects', (req, res) => {
  db.all('SELECT * FROM projects', (error, row) => {
    if(error) {
      res.status(500).send("Oops. Try again")
    } else {
      res.status(200).json(row)
      console.log(row);
    }
  });
});

app.post("/portfolio/contact", (req, res) => {
  const data = {
    lastName: req.body.lastName,
    firstName: req.body.firstName,
    email: req.body.email,
    message: req.body.message
  }
  const sql = "INSERT INTO Contact (lastName, firstName, email, message) VALUES (?, ?, ?, ?)"
  const params = [data.lastName, data.firstName, data.email, data.message]
  db.run(sql, params, (error, row) => {
      if(error) {
        res.status(500).send("Oops. Try again")
      } else {
        res.status(200).json({
            "message": "success",
            "data": data,
            "id" : this.lastID
        })
      }
    }
  )
});

let server = app.listen(process.env.PORT || 5000, function() {
  console.log("Listening on port " + server.address().port);
});
