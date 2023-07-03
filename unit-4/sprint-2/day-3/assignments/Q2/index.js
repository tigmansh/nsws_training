const express = require("express")
const multer = require("multer")

const app = express()

const fileStorege = multer.diskStorage({diskStorage: (req,file,cb)=>{
    cb(null, '__dirname+&quot;./images&quot;')
},
filenameb:(req,file,cb)=>{
    cb(null, Date.now()+"-"+file.originalname)
}
})

const uplode = multer({storage:fileStorege})

app.post('/s',uplode.single('image'),(req,res)=>{
    console.log(req.file);
    res.send("One file uploded")
})

app.get('/',(req,res)=> {
    res.send("ok")
})

app.listen(2700,()=>{
    console.log("server is runing port 2700.....");
})