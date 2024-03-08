const express = require("express");
const app = express();
let { readItem, readSpecificTopic, updateItem } = require("./Database/CRUD");
const PORT = 8058;

app.get("/AllCatalog", (req, res) => {
  readItem((err, row) => {
    if (err) {
      res.status(500).send("Error While Read All Books");
    } else {
      res.status(200).json(row);
    }
  });
});

app.get("/AllCatalog/:topic", (req, res) => {
  const topic = req.params.topic;
  console.log(`The Topic is ${topic}`);
  readSpecificTopic(topic, (err, row) => {
    if (err) {
      console.log("Error When Getting Specific Book");
      res.status(500).send("Error While Getting Specific Book");
    } else {
      console.log("Test");
      res.status(200).json(row);
    }
  });
});

app.listen(PORT, () => {
  console.log(`The Catalog Service is running on port ${PORT}`);
});
