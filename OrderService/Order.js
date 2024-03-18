let express = require("express");
let axios = require("axios");
let app = express();
let PORT = 8084;

const { readItemWithID, updateItem } = require("./CatalogService/CRUD");

app.get("/PurchaseBook/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const response = await axios.get(
      `http://dosproject-catalog-service-1:8058/SpecificBookWithID/${id}` //! check if the bock is exist
    );

    //! check if the book is found (Correct ID)
    if (response.data.length > 0) {
      readItemWithID(id, (err, raw) => {
        if (err) {
          res.status(500).send("Error While Reading");
        } else {
          let stock = raw[0].Stocks; //! The number of Stocks
          //! i can buy the book
          if (stock > 0) {
            res.send("Successful Purchase");
            updateItem(id, --stock);
          } else {
            //! The Stocks of Book is 0x
            res.send("Out of Stock");
          }
        }
      });
    } else {
      //! The ID is wrong !
      res.status(201).send("Book Not Found");
    }
  } catch (error) {
    res.status(500).send("Error While Purchase");
  }
});

app.listen(PORT, () => {
  console.log(`Order Service Run in port ${PORT}`);
});
