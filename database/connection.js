const mongoose=require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/test").then(()=>{
    console.log("connection succeful");
}).catch((e)=>{
    console.log(e)
})

// how to make a schema of database

const schema = new mongoose.Schema({
    name:String,

})
// how to make a table 
const user =mongoose.model("user",schema)

module.exports=user;