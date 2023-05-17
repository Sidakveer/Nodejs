const fs = require('fs');
const express = require('express');

const app = express()


app.use("/p", (req, res, next) => {
    console.log("hhi")
    res.send("<p>hi</p>")
})

app.use("/", (req, res, next) => {
    console.log("f you")
    res.send("<h2>Hello Babe</h2>")
    next()
})



app.listen(3000);





