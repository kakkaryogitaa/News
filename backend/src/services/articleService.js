const db = require("../config/database");

function getAllArticles() {
  return new Promise((resolve, reject) => {
    db.all(
      "SELECT * FROM articles ORDER BY published DESC",
      [],
      (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      }
    );
  });
}

module.exports = {
  getAllArticles,
};