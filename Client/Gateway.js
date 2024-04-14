const express = require("express");
const axios = require("axios");
const app = express();
const PORT = 1775;
app.use(express.json());

app.get("/search", async (req, res) => {
  try {
    console.log("Inter");
    const response = await axios.get(
      "http://dosproject-catalog-service-1:8058/AllCatalog"
    );
    res.send(response.data);
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).send(error.message);
  }
});

app.get("/search/:topic", async (req, res) => {
  try {
    const topic = req.params.topic;
    const response = await axios.get(
      `http://dosproject-catalog-service-1:8058/AllCatalog/${topic}`
    );
    res.send(response.data);
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).send(error.message);
  }
});

app.get("/info/:id", async (req, res) => {
  try {
    let id = req.params.id;
    let response = await axios.get(
      `http://dosproject-catalog-service-1:8058/SpecificBookWithID/${id}`
    );
    res.status(200).send(response.data);
  } catch (error) {
    res.status(500).send(response.data);
  }
});

app.post("/purchase/:id", async (req, res) => {
  try {
    console.log("IN");
    const id = req.params.id;
    const response = await axios.get(
      `http://dosproject-order-service-1:8084/PurchaseBook/${id}`
    );
    res.status(201).send(response.data);
  } catch (error) {
    res.send(error.message);
  }
});
app.listen(PORT, () => {
  console.log(`The Gateway Service is using port ${PORT}`);
});
