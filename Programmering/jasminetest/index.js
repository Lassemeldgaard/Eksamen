"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var numbers_1 = require("./numbers");
var app = express();
app.set('port', (process.env.PORT || 5000));
app.get("/", function (req, res) {
    console.log("Request!");
    var thenumber = 2;
    res.send(numbers_1.number(thenumber));
});
app.listen(app.get('port'), function () {
    console.log('Node app is running on port', app.get('port'));
});
