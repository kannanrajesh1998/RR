// Require dependencies
const express = require('express');
const mongoose = require('mongoose');

const url="mongodb://localhost:27017/rr"
const port = 3000;
const app = express()


mongoose.connect(url, {})
    .then(result => console.log("database connected"))
    .catch(err => console.log(err))

app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/', (req,res)=> {
    res.render("index")
})

app.listen(port,()=>{
    console.log(`server is running at port : ${port}`)
})
