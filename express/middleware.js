function agedetector(req,res,next){
    if(req.query.age>18){
        res.send("you enter in this website")
        // next();
    }
    else{
        res.send("you cannnot enter in this website")
    }

}
module.exports=agedetector;

// middleware use hota hy authorization k liye