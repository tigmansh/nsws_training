const http = require("http");
const fs = require("fs");
const fsp = require("fs/promises");

let server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("YUPPP !");
  } else if (req.url === "/bigasync") {
    fs.readFile("./big.txt", "utf-8", (err, data) => {
      if (err) {
        res.write(err);
        res.end();
      } else {
        res.write(data);
        res.end();
      }
    });
  } else if (req.url === "/bigsync") {
    let syncReading = fs.readFileSync("./big.txt", "utf-8");
    res.write(syncReading);
    res.end();
  } else if (req.url === "/smallasync") {
    fs.readFile("./small.txt", "utf-8", (err, data) => {
      if (err) {
        res.write(err);
        res.end();
      } else {
        res.write(data);
        res.end();
      }
    });
  } else if (req.url === "/smallsync") {
    let syncReading = fs.readFileSync("./small.txt", "utf-8");
    res.write(syncReading);
    res.end();
  } else if (req.url === "/streambig") {
    const chunk = fs.createReadStream("./big.txt", "utf-8");
    chunk.pipe(res);
  } else if (req.url === "/streamsmall") {
    const chunk = fs.createReadStream("./small.txt", "utf-8");
    chunk.pipe(res);
  } else if (req.url === "/promisebig") {
    fsp.readFile("./big.txt", "utf-8")
      
    .then((data) => {
        res.write(data);
        res.end();
      })

      .catch((err) => {
        res.write(err);
        res.end();
      });
  }  else if (req.url === "/promisesmall") {
    fsp.readFile("./small.txt", "utf-8")
      
    .then((data) => {
        res.write(data);
        res.end();
      })

      .catch((err) => {
        res.write(err);
        res.end();
      });
  }
});

server.listen(3000, () => {
  console.log("Server is running at port 3000");
});
