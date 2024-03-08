const express = require("express");
const axios = require("axios");
const app = express();
const PORT = 8785;
app.use(express.json());
app.get("/search", async (req, res) => {
  try {
    const response = await axios.get("http://localhost:8058/AllCatalog");
    res.send(response.data);
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/search/:topic", async (req, res) => {
  try {
    const topic = req.params.topic;
    const response = await axios.get(
      `http://localhost:8058/AllCatalog/${topic}`
    );
    res.send(response.data);
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(PORT, () => {
  console.log(`The Search Service is running on port ${PORT}`);
});
