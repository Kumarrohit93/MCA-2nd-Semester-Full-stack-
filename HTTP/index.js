const express = require("express")
const app = express()

app.get("/home", (req, res) => {
  const username = req.query.username;
  res.send(`Welcome to home page, ${username}`)
})

// app.get("/search", (req, res) => {
//   res.send("You are on Search page")
// })


app.listen(3000, () => {
  console.log("Server is listening at port 3000");
});
