var fs = require("fs");
var express = require("express");
var dummyjson = require("dummy-json");

var template = fs.readFileSync("api-template.hbs", {encoding: "utf8"});
var app = express();

app.get("/messages", function(req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.set("Content-Type", "application/json");

  var myMockdata = {
    folders: ["Inbox", "Important", "Sent", "Spam"]
  };

  res.send(dummyjson.parse(template, {mockdata: myMockdata}));
});

app.listen(8080);
