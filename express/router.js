const express = require("express");
const router=express.Router();
const midle=require("./middleware");
  router.use(midle)
router.get("/",(req,res)=>{
    //    res.sendFile(`${pathdir}/index.html`)
    //    file sending method in normal way
            res.render("index",{
                title:"index"
            })
    })
    
    router.get("/about",(req,res)=>{
        // res.sendFile(`${pathdir}/about.html`)
        res.render("about",{
            title:"about"
        })
     })
    //  Download able functionality is added
     router.get("/download",(req,res)=>{
         res.download(`${pathdir}/about.html`)
     })
     module.exports=router;
