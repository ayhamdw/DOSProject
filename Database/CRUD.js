let dp = require("./Create");

const createItem = (id, name, topic, stocks, callback) => {
  const sql = `INSERT INTO Book VALUES (?,?,?,?)`;
  dp.run(sql, [id, name, topic, stocks], (err) => {
    if (err) {
      console.log("Error While inserted New Book");
    } else {
      console.log("Item inserted successfully");
    }
  });
};

const readItem = (callback) => {
  const sql = `SELECT * FROM Book`;
  dp.all(sql, [], callback);
};

const readSpecificTopic = (topic, callback) => {
  const sql = `SELECT * FROM Book where Topic = ?`;
  dp.all(sql, [topic], callback);
};

const updateItem = (id, stocks, callback) => {
  const sql = `UPDATE Book set stocks = ? WHERE id = ?`;
  dp.run(sql, [id, stocks], callback);
};

const deleteItem = (id) => {
  const sql = `DELETE FROM Book WHERE id = ?`;
  dp.run(sql, [id], (err) => {
    if (err) {
      console.log("Error where deleting an items");
    } else {
      console.log("Deleting Done");
    }
  });
};

module.exports = {
  readItem,
  readSpecificTopic,
  updateItem,
};
