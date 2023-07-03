const fs = require('fs');
const date = new Date();

function record(req,res,next){
    let id = req.url.split("/")[2];
    if(req.method == "PATCH"){
        fs.appendFileSync("./records.txt", `\nThe dish with id:${id} has been updated | ${date}\n`);
    } else if(req.method == "DELETE"){
        fs.appendFileSync("./records.txt", `\nThe dish with id:${id} has been deleted | ${date}\n`);
    }
    next();
}

module.exports = { record };