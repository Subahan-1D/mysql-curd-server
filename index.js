const express = require("express");
const app = express();
const cors = require("cors");
const mysql = require("mysql");

// middleware
app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "crud",
});

app.get("/", (req, res) => {
  const sql = "SELECT * FROM student";
  db.query(sql, (req, res) => {
    if (err) return res.json("error");
    return res.json(data);
  });
});

app.listen(8000, () => {
  console.log("Mysql Listening");
});
