const express = require("express");
const app = express();
app.set('view engine','ejs')
app.set('views',__dirname + '/views');
app.get("/", (req, res)=>{
    res.render("index")
})
app.get("/contact",(req, res)=>{
    res.render("contact")
})
app.get("/about", (req, res)=>{
    res.render("about")
})
app.get("/events", (req, res)=>{
    res.render("events")
})
app.listen(3000)