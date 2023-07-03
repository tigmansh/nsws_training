const fs = require("fs");
const path = require("path");

let file_Activity = process.argv[2];
let file_Name = process.argv[4];
let content = process.argv[3];

// Code to Create file

if(file_Activity === "create")
{
    fs.writeFileSync(file_Name, content+"\n");
    console.log("Your file created successfully!");

  // command to create a file with some content:- node index.js create "My name is XYZ" text_FileName.txt
}

// Code to Append

else if(file_Activity === "append")
{
    fs.appendFileSync(file_Name, content+"\n");
    console.log("Your content appended successfully!");

 // command to append a file with some content:- node index.js append "My name is ABC" text_FileName.txt
}

// Code to Read

else if(file_Activity === "read")
{
   let data = fs.readFileSync(content,'utf-8');
   console.log(data);

 // command to read a file:- node index.js read text_FileName.txt
}

// Code to Rename

else if(file_Activity === "rename")
{
    fs.renameSync(content,file_Name);
    console.log(`${content} renamed to ${file_Name} successfully!`);

 // command to rename a file:- node index.js rename old.txt new.txt
}

// Code to Delete

else if(file_Activity === "delete")
{
    fs.unlinkSync(content);
    console.log(`${content} is deleted successfully!`);

 // command to delete a file:- node index.js delete text_FileName.txt
}

// Code to List

else if(file_Activity === "list")
{
    fs.readdir(content,"utf-8", (err,files)=>{
      if(err) console.log(err);
      else console.log(files);
    });
 // command to print a list:- node index.js list ../assignments
}