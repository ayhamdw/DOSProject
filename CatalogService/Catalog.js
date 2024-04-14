const express = require("express");
const app = express();
let { readItem, readSpecificTopic, readItemWithID } = require("./CRUD");
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
      if (row.length === 0) {
        console.log("Book not found");
        res.status(200).json({ error: "Book not found" });
      } else {
        // console.log("Book found:", row);
        res.status(200).json(row);
      }
    }
  });
});

app.get("/SpecificBookWithID/:id", (req, res) => {
  const id = req.params.id;
  readItemWithID(id, (err, row) => {
    if (err) {
      console.error("Error while reading a book with specific ID:", err);
      res.status(500).send("Error while reading a book with specific ID");
    } else {
      if (row.length === 0) {
        console.log("Book not found");
        res.status(200).json({ error: "Book not found" });
      } else {
        // console.log("Book found:", row);
        res.status(200).json(row);
      }
    }
  });
});

app.listen(PORT, () => {
  console.log(`The Catalog Service is running on port ${PORT}`);
});
