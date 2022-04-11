const mysql = require("mysql");

const mysqlConnection = mysql.createConnection({
  host: "b4qpnbvdaienrvkjrsrj-mysql.services.clever-cloud.com",
  user: "uduls7ilhzt7zokm",
  password: "5Qbbj6alWRZfCnkCwA5j",
  database: "b4qpnbvdaienrvkjrsrj",
  port: 3306,
});

mysqlConnection.connect(function (err) {
  if (err) {
    console.log(err);
    return;
  } else {
    console.log("Base de datos correctamente enlazada");
  }
});

module.exports = mysqlConnection;
