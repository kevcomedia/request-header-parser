const express = require('express');
const requestIp = require('request-ip');
const uaParser = require('connect-ua-parser');
const app = express();

app.use(uaParser());

app.get('/', function(req, res) {
  const output = {
    ip: requestIp.getClientIp(req),
    lang: req.headers['accept-language'].split(',')[0],
    os: req.useragent.os.family
  };
  res.send(output);
});
app.listen(process.env.PORT || 8080);
