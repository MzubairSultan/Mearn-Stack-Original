// This is File System

// Common use for the File System module:

// Read files
// Create files
// Update files
// Delete files
// Rename files
// ---------------------------------------------

const fs = require("fs")
// Non blocking io model 
// fs.writeFile("file.text","data is added to file",()=>{
//     console.log("data is added to succefuly")
// })

 const b  =fs.writeFileSync("file.text2","data is Enterd")
console.log("subscribe to z-max")
console.log(b)

// -----------------Read File Method---------------//

fs.readFile("file.text","utf-8",(err,data)=>{
    console.log(data)
})

// ------------------Update File Method------------//

fs.appendFile("file.text","new data is here",(err)=>{
    console.log(err)
})

// -----------------Rename File Method-------------//

// fs.rename("file.text","Mirza.text",(err)=>{
//     console.log(err)
// })

// --------------------Delete File Method-----------//
   fs.unlinkSync("Mirza.text")
