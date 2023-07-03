const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    fs.readdir("../A1", "utf-8", (err, files) => {
      if (err) {
        res.end(http.STATUS_CODES["500"]);
      } else filesData(files, res, "");
    });
  } else {
    if (req.url.includes(".")) {
      let read = fs.readFileSync(`.${req.url}`, "utf-8");
      res.write(read);
      res.end();
    } else {
      fs.readdir(`.${req.url}`, "utf-8", (err, files) => {
        if (err) {
          res.end(http.STATUS_CODES["500"]);
        } else filesData(files, res, req.url);
      });
    }
  }
});

server.listen(7300, () => {
  console.log("Server is running at port 7300");
});

function filesData(arr, res, opt) {
  res.setHeader("Content-Type", "text/html");
  arr.forEach((ele) => {
    res.write(
      `<li><a href='http://localhost:7300${opt}/${ele}'>${ele}</a></li>`
    );
  });
  res.end();
}
