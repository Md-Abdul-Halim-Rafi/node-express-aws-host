const express = require("express")

const app = express()

const PORT = process.env.PORT || 3000

app.get("/", (req, res) => {
    res.send("Welcome Meefee")
})

app.listen(PORT, (err) => {
    if (err) throw err

    console.log("Server is listening on http://localhost:", PORT)
})