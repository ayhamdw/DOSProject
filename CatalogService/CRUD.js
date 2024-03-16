let dp = require("./Create");

const createItem = (id, name, topic, stocks, cost, callback) => {
  const sql = `INSERT INTO Book VALUES (?,?,?,?,?)`;
  dp.run(sql, [id, name, topic, stocks, cost], (err) => {
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

const readItemWithID = (id, callback) => {
  const sql = `SELECT * FROM Book WHERE ID = ?`;
  dp.all(sql, [id], callback);
};

const readSpecificTopic = (topic, callback) => {
  const sql = `SELECT * FROM Book where Topic = ?`;
  dp.all(sql, [topic], callback);
};

const updateItem = (id, stocks, callback) => {
  const sql = `UPDATE Book set Stocks = ? WHERE id = ?`;
  dp.run(sql, [stocks, id], callback);
};

module.exports = {
  readItem,
  readSpecificTopic,
  readItemWithID,
  updateItem,
  createItem,
};
