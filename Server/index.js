// How to make a server
const fs=require("fs")
const jsondata= fs.readFileSync("api.json","utf-8");
const objdata= JSON.parse(jsondata)
const htttp = require("http")
const server = htttp.createServer((req,res)=>{
    if(req.url=="/"){
        res.end("This is home page")
    }
    else if(req.url=="/about"){
         res.end(objdata[0].name)   

    }
    else{
        res.end("Page is Not found")
    }
   
})
server.listen(5000,()=>{
    console.log("server is listening on port no 5000")
})