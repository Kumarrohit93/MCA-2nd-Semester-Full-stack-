const express = require("express");
const app = express();
const users = require("./data.js")

app.get("/allusers", (req, res) => {
  res.send(users)
})

app.get("/user/:id", (req, res) => {
  const id = Number(req.params.id)
const user = users.find((u) => u.id === id)
  if(user) {
    res.send(user)
  } else {
    res.send("User not found")
  }
})

app.get("/html/user", (req, res) => {
  const html = `
  <h1>All Emails</h1>
  <ol>
  ${users.map((user) => `<ul><p>${user.first_name}</p></ul><li>${user.email}</li>`).join(" ")}`
  res.send(html)

})

console.log(Error)

app.listen(3000, () => {
  console.log("Server is listening at port 3000");
});
