const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = 3000;

function convertTo12HourFormat(isoString) {
    const date = new Date(isoString);
    let hours = date.getHours();
    let minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    const strTime = hours + ':' + minutes + ' ' + ampm;
    return date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear() + "  " + strTime;
  }

// Connect to the database
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'todoapp'
});

db.connect(error => {
  if (error) throw error;
  console.log('Successfully connected to the database.');
});

// Middleware to parse JSON bodies
app.use(express.json());

// Signup route
app.post('/signup', (req, res) => {
  const { username, password } = req.body;

  db.query('INSERT INTO users (username, password) VALUES (?, ?)', [username, password], (error, results) => {
    if (error) {
      console.log(error);
      res.status(500).send('An error occurred during signup.');
    } else {
      res.status(200).send('Signup successful.');
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});