const express = require("express")
const app = express()
const port = 9000;

app.get("/home/:id", (req, res) => {
    const id = req.params.id
    const username = req.query.username;

    res.send(`Welcome back, ${username}. Your userID is ${id}`)
})

app.listen(port, () => {
    console.log(`Server is listening at port ${port}`)
})