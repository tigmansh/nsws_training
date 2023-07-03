const express = require('express');
const morgan = require('morgan');
const fs = require('fs');
const app = express();

app.use(morgan(function (tokens, req, res) {
  let x = [
    tokens.method(req, res),
    tokens.url(req, res),
    tokens.date(req,res),
    tokens.status(req, res),
    tokens.url(req, res, 'HTTP/:http-version'),
    tokens.res(req, res, 'content-length'),
    tokens['response-time'](req, res)
  ]
  
  fs.appendFileSync("./logger.txt", `Method ${x[0]} || status ${x[3]} || content-length ${x[5]} || time-taken ${x[6]} ms || date ${x[2]} || http version ${x[4]} || url accessed ${x[1]} \n`);
}));

app.get('/', (req, res) => {
  res.send('Hello To World !');
});



app.listen(7300, () => {
  console.log('Morgan app listening on port 7300!');
});