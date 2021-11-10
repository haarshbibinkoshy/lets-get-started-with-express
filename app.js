const http = require('http');

const express=require('express');

const app = express();

app.use((req, res, next) => {
    console.log(`in the middlewareaa`);
    next();
})
app.use((req, res, next) => {
    console.log(`in another middlewareaa`);
    res.send( { key1: 1})
})
app.listen(3000)