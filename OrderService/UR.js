const readItemWithID = (id, callback) => {
  const sql = `SELECT * FROM Book WHERE ID = ?`;
  dp.all(sql, [id], callback);
};

const updateItem = (id, stocks, callback) => {
  const sql = `UPDATE Book set Stocks = ? WHERE id = ?`;
  dp.run(sql, [stocks, id], callback);
};
