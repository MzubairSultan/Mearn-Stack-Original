// How to make a server

const htttp = require("http")
const server = htttp.createServer((req,res)=>{
    if(req.url=="/"){
        res.end("This is home page")
    }
    else if(req.url=="/about"){
        res.end("This is about page")
    }
    else{
        res.end("Page is Not found")
    }
   
})
server.listen(3005,()=>{
    console.log("server is listening on port no 3005")
})