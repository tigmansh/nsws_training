const express = require('express');
const fs = require('fs');

const app = express();
app.use(express.json()) // middle-ware

app.get("/",(req,res)=>{
    const dataStream = fs.createReadStream("./todo.json",'utf-8')
    dataStream.pipe(res);
})

app.post("/post",(req,res)=>{
    const data = fs.readFileSync('./todo.json','utf-8');

    const parsed = JSON.parse(data);
    parsed.push(req.body);
    fs.writeFileSync("./todo.json",JSON.stringify(parsed));
    res.send("LOOK IN TERMINAL PLZZ !");
})

app.put("/put/:id",(req,res)=>{
    const id = req.params.id;
    const data = fs.readFileSync('./todo.json','utf-8');
    const parsed = JSON.parse(data);
    for(let i = 0; i < parsed.length; i++){
        if(parsed[i].id == id){
            parsed[i] = req.body;
        }
    }
    fs.writeFileSync("./todo.json",JSON.stringify(parsed));
    res.send("Put request done !");
})

app.delete("/del/:id",(req,res)=>{
    const id = req.params.id;
    const data = fs.readFileSync('./todo.json','utf-8');
    const parsed = JSON.parse(data);
    for(let i = 0; i < parsed.length; i++){
        if(parsed[i].id == id){
            parsed.splice(i,1);
        }
    }
    fs.writeFileSync("./todo.json",JSON.stringify(parsed));
    res.send(`${id} is deleted from your data-base`);
})

app.listen(4500, () => {
    console.log("server is running at 4500");
  });