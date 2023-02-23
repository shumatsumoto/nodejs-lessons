import * as http from "http";

const server = http.createServer(function (req, res) {
  console.log(req.url);
  res.end("aaa");
});

server.listen(8080);
