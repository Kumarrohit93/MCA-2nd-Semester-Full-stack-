const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url === "/favicon.ico") return res.end();
  const now = new Date(Date.now())
  const log = `${now.toString()} New Request is received from localhost:3000${req.url}\n`;
  fs.appendFile("log.txt", log, (err, data) => {
    res.end("Hello from server!");
  });

  switch (req.url) {
    case "/home":
        res.end("This is Home page")
        break;
    case "/contact":
        res.end("This is Contact page")
        break;
    case "/services":
        res.end("This is Service page")
        break;
    default:
        break;
  }
});

server.listen(3000, () => {
  console.log("Server is listening at port 3000");
});
