const fs = require("fs")

fs.writeFileSync("example_sync.txt", "This file is created synchronously");
const data = fs.readFileSync("example_sync.txt", 'utf-8')
console.log(data);

fs.writeFile("example_sync1.txt", "This file is created asynchronously", (error, data) => {
    fs.readFile("example_sync1.txt", 'utf-8', (error, data) => {
        console.log(data)
    })
})

