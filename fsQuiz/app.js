const fs = require("fs")

fs.writeFile("student.txt", "Name: Rohit kumar, Rollno: 2509401018, Program: MCA", (err) => {
    if(err) {
        throw err
    }
    console.log("File created successfully")
})

fs.readFile("student.txt", "utf8", (err, data) => {
    if(err) {
        throw err;
    }

    console.log("All Data inside the file is: ", data)
})

fs.appendFile("student.txt", "CGPA: 8.1", (err) => {
    if(err) throw err
    console.log("Append data successfully")
})