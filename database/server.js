const express = require("express")
const app = express();
const user =require("./connection")

//  Now we have a four method to deal with a database
// get (is used to get the data from the database)
// post (is used to send the data into database)
// patch (is used to update the data from database)
// delete (is used to delete the data from the database)

//  ub hum api bny gy data send krny k liye 
  app.use(express.json());
 app.post("/",async(req,res)=>{
    try {
        const senddata= new user(req.body)
        const savedata= await senddata.save();
        res.send(savedata)
    } catch (error) {
        res.status(404).send(error);
    }

 })
//   data get krny ki  api
 app.get("/user",async(req,res)=>{
     try {
        const getdata = await user.find({})
        res.send(getdata);
     } catch (error) {
        res.status(404).send(error)
     }
 })

//   particlar data hasil krny k liye api bnany ka triqa

app.get("/user/:id",async(req,res)=>{
        
        try {
            const id = req.params.id;
        const getiddata= await user.findById({_id:id})
        res.send(getiddata);
            
        } catch (error) {
            res.status(404).send(error)
        }

})

//  update krny k liye api bnany ka triqa

app.patch("/update/:id",async(req,res)=>{
    try {
        const id=req.params.id;
        const updatedata = await user.findByIdAndUpdate({_id:id},req.body,{new:true})
        res.send(updatedata) 
    } catch (error) {
        res.status(500).send(error);
    }
})
//  table sy data delete krny ki api bnany ka triqa

app.delete("/delete/:id",async(req,res)=>{
   try {
      const id = req.params.id;
      const deltedata= await user.findByIdAndDelete({_id:id})
      res.send(deltedata)
   } catch (error) {
      res.status(500).send(error)
   }
})
app.listen(4500,()=>{
    console.log("server is running on port 4500")
})