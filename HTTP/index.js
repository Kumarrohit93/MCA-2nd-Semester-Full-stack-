const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url === "/favicon.ico") return res.end();
  const log = `${Date.now()} New Request is received from ${req.url}`;
  fs.appendFile("log.txt", log, (err, data) => {
    res.end("Hello from server!");
  });
});

server.listen(3000, () => {
  console.log("Server is listening at port 3000");
});
