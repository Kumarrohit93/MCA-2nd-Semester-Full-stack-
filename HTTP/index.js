const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url === "/favicon.ico") return res.end();
  const log = `${Date.now()} New Request is received from localhost:3000${req.url}\n`;
  fs.appendFile("log.txt", log, (err, data) => {
    res.end("Hello from server!");
  });

  if(req.url == "/about") {
    res.end("This is about page")
  }
  if(req.url == "/home") {
    res.end("This is home page")
  }
  if(req.url == "/contact") {
    res.end("This is contact page")
  }
});

server.listen(3000, () => {
  console.log("Server is listening at port 3000");
});
