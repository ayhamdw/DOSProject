const { createItem, updateItem, readItem } = require("./CRUD");
createItem(
  1,
  "How to get a good grade in DOS in 40 minutes a day",
  "Distributed Systems",
  500,
  (err) => {
    if (err) {
      console.log("Error Where inserted Book");
    }
  }
);
createItem(2, "RPCs for Noobs", "Distributed Systems", 500);
createItem(
  3,
  "Xen and the Art of Surviving Undergraduate School",
  "Undergraduate School",
  500
);
createItem(
  4,
  "Cooking for the Impatient Undergrad",
  "Undergraduate School",
  500
);
