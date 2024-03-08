let sql = require("sqlite3").verbose();
let myDatabase = "BookDatabase.dp";
let dp = new sql.Database(myDatabase, (err) => {
  if (err) {
    console.log("Error while connected");
  } else {
    console.log("Connected Database");
    dp.run(
      "CREATE TABLE IF NOT EXISTS Book (ID INTEGER PRIMARY KEY , Name VARCHAR(80), Topic VARCHAR(80),  Stocks INTEGER)",
      (err) => {
        if (err) {
          console.log("Error while creating table");
        } else {
          console.log("Table Already Existed");
        }
      }
    );
  }
});
module.exports = dp;
