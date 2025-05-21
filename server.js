const jsonServer = require("json-server");
const server = jsonServer.create();
const middlewear = jsonServer.defaults();
const router = jsonServer.router("db.json");
const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 8000;
server.use(cors());
server.use(express.json());
server.use(middlewear);

server.use(router);

server.listen(port, (err) => {
  if (err) console.log(err);
  console.log(`Json server Open : http://localhost:${port}`);
});
