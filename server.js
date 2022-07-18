const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const mysql = require('mysql2');

//express middleware
app.use(express.urlencoded({extended: false}));
app.use(express.json());
//connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    //your mysql username,
    user: 'root',
    //your mysql password
    password: "@UhaDk7yj",
    database: 'election'
  },
  console.log('Connected to the election database')
);

// default response for any other request (not found)
app.use((req,res) => {
  res.status(404).end();
});


app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});