const express = require("express");
const path=require("path");
const router=require("./router")


const app = express()
app.use(router);
const pathdir=path.join(__dirname,'public')
console.log(pathdir)
  app.use(express.static(pathdir))
//Template engine setting
  app.set("view engine","ejs")
  console.log(app.get("view engine"))

// console.log(app)


app.listen(4001,()=>{
    console.log("server is running on port no 4001")
})
