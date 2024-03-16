const sqlite3 = require("sqlite3").verbose();
const path = require("path");

const databasePath = path.resolve(__dirname, "./BookDatabase.dp");

const db = new sqlite3.Database(databasePath, (err) => {
  if (err) {
    console.error("Error while connecting to the database:", err.message);
  } else {
    console.log("Connected to the database");
    db.run(
      `CREATE TABLE IF NOT EXISTS Book (
        ID INTEGER PRIMARY KEY,
        Name VARCHAR(80),
        Topic VARCHAR(80),
        Stocks INTEGER,
        Cost INTEGER
      )`,
      (err) => {
        if (err) {
          console.error("Error while creating table:", err.message);
        } else {
          console.log("Table already exists or created successfully");
        }
      }
    );
  }
});

module.exports = db;
