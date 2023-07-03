const dns = require("dns");
const fs = require("fs");
const cowsay = require("cowsay");

let write = (url)=>{
    dns.lookup(url,(err,data,family)=>{
        if(err) console.log(err);
        else{
            fs.appendFile("data.txt", `URL : ${url} | Address : ${data} | IPv${family} \n`, (err)=>{
                if(err) console.log(err);
                else console.log("DONE!");
            })
        }
    })
}

let read = (file)=>{
    fs.readFile(`${file}`, 'utf-8', (err,data)=>{
        if(err) console.log(err);
        else console.log(data);
    })
}

let del = (file)=>{
    fs.unlink(`${file}`,(err)=>{
        if(err) console.log(err);
        else console.log("DELETED!");
    })
}

let cow = (file)=>{
    fs.readFile(`${file}`, 'utf-8', (err,data)=>{
        if(err) console.log(err);
        else{
            console.log(cowsay.say({
                text : data,
                e : "oO",
                T : "U "
            }));
        }
    })
}

module.exports={
    write:write,
    read:read,
    cow:cow,
    delete:del
}