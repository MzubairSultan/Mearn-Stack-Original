const express = require("express");
const path=require("path");


const app = express()
const pathdir=path.join(__dirname,'public')
console.log(pathdir)
  app.use(express.static(pathdir))
//Template engine setting
  app.set("view engine","ejs")
  console.log(app.get("view engine"))

// console.log(app)
app.get("/",(req,res)=>{
//    res.sendFile(`${pathdir}/index.html`)
//    file sending method in normal way
        res.render("index",{
            title:"index"
        })
})

app.get("/about",(req,res)=>{
    // res.sendFile(`${pathdir}/about.html`)
    res.render("about",{
        title:"about"
    })
 })
//  Download able functionality is added
 app.get("/download",(req,res)=>{
     res.download(`${pathdir}/about.html`)
 })

app.listen(4001,()=>{
    console.log("server is running on port no 4001")
})
