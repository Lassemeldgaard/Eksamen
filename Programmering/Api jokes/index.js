"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Express = require("express");
var request = require("request");
/*import { json } from 'express';*/
var app = Express();
var test = [{
        title: "test",
        rating: 1
    }];
app.get("/", function (req, resp) {
    console.log("index page");
    resp.sendFile(__dirname + "/index.html");
});
app.get("/dadjoke/", function (req, resp) {
    var options = {
        method: 'GET',
        url: 'https://icanhazdadjoke.com/',
        headers: {
            accept: 'application/json'
        },
    };
    request(options, function (error, response, body) {
        if (error)
            throw new Error(error);
        var joke = JSON.parse(body);
        console.log(body);
        resp.json(joke.joke);
    });
});
app.get("/chuckjoke/", function (req, resp) {
    var options = {
        method: 'GET',
        url: 'https://api.chucknorris.io/jokes/random',
        headers: {
            accept: 'application/json'
        },
    };
    request(options, function (error, response, body) {
        if (error)
            throw new Error(error);
        var chuckjoke = JSON.parse(body);
        console.log(body);
        resp.json(chuckjoke.value);
    });
});
app.get("/RateDad/", function (req, resp) {
    var options = {
        method: 'GET',
        url: 'https://api.chucknorris.io/jokes/random',
        headers: {
            accept: 'application/json'
        },
    };
    request(options, function (error, response, body) {
        if (error)
            throw new Error(error);
        var chuckjoke = JSON.parse(body);
        console.log(body);
        resp.json(chuckjoke.value);
    });
});
/*function Dad()
{
    console.log("Dad function")
    var options = {
        method: 'GET',
        url: 'https://icanhazdadjoke.com/',
        headers:
            {
                accept: 'application/json'
            },
    };
    
    request(options, function (error, response, body) {
        if (error) throw new Error(error);
        let joke = JSON.parse(body)
        console.log(joke.joke)
        let title = joke.joke
        let rating = 0;
        test.push({ title, rating });
    });
    
}
function Chuck()
{
    var options = {
        method: 'GET',
        url: 'https://api.chucknorris.io/jokes/random',
        headers:
            {
                accept: 'application/json'
            },
    };

    request(options, function (error, response, body) {
        if (error) throw new Error(error);
        let chuckjoke = JSON.parse(body)
        console.log(chuckjoke.value);
        let title = chuckjoke.value;
        let rating = 0;
        test.push({ title, rating });
    });
}*/
console.log("server listing on port 3000");
app.listen(3000);
