const mysql = require('mysql2/promise');
const config = {
    db: {
      /* don't expose password or any sensitive info, done only for demo */
      host: "db4free.net",
      user: "bbcartoon",
      password: "P@ssw0rd",
      database: "bigboss",
    }
  };

async function query(sql, params) {
  const connection = await mysql.createConnection(config.db);
  const [results, ] = await connection.execute(sql, params);

  return results;
}

module.exports = {
  query
}