const express = require("express")
const app = express()
// console.log(app)
app.get("/",(req,res)=>{
   res.send("hi this is first express")
})

app.get("/about",(req,res)=>{
    res.send("hi this is first about express")
 })

app.listen(4000,()=>{
    console.log("server is running on port no 4000")
})
