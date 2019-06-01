const sqlite3 = require('sqlite3');
sqlite3.verbose();

const db= new sqlite3.Database('portfolio.db', (err) => {
  if(err) {
    return console.error(err.message);
  }
  console.log('Connected to the portfolio SQLite database');
});

module.exports = db ;
