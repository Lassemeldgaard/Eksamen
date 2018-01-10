"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Express = require("express");
var app = Express();
var BodyParser = require("body-parser");
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));
var HTTP = require("http-status-codes");
var hal_1 = require("hal");
app.use(function (req, resp, next) {
    resp.header("Access-Control-Allow-Origin", "*");
    resp.header("Access-Control-Allow-Methods", "POST, GET, DELETE, OPTIONS");
    resp.header("Access-Control-Allow-Headers", "Origin, X-Requested-with,Content-type, Accept");
    resp.header("Content-Type", "application/hal+json");
    next();
});
var quotes = [{
        title: "Newest quote",
        description: 'This is an awesome quote made by lasse',
        rating: 2,
        date: new Date("Wed Sep 20 2017")
    },
    {
        title: "Highest rated quote",
        description: 'This is an awesome quote 2 made by lasse',
        rating: 3,
        date: new Date("2017-09-18")
    },
    {
        title: "Lowest rating mid created",
        description: 'This is an awesome quote 2 made by lasse',
        rating: 1,
        date: new Date("2017-09-19")
    }];
/*http://localhost:3000/   Dette er den url der skal bruge under Explorer i Halbrowseren http://api.m.ox.ac.uk/browser (http://api.m.ox.ac.uk/browser/#http://localhost:3000/)*/
app.get("/", function (req, resp) {
    var res = new hal_1.Resource({}, "http://localhost:3000/");
    res.link("AddQuotes: ", "http://localhost:3000/quotes/create");
    res.link("getSpecificQuote: ", "http://localhost:3000/quotes/list");
    res.link("Highest rated: ", "http://localhost:3000/quotes/highestrated");
    res.link("Newest quotes: ", "http://localhost:3000/quotes/newest");
    resp.status(HTTP.OK).json(res);
});
//ET endpoint for hver resource
app.put("/quotes/:id/downvote", function (req, resp) {
    var result;
    var id = req.params.id;
    quotes[id].rating--;
    result = "Downvoted";
    resp.status(HTTP.OK).send(result);
});
app.put("/quotes/:id/upvote", function (req, resp) {
    var result;
    var id = req.params.id;
    quotes[id].rating++;
    result = "Upvoted";
    resp.status(HTTP.OK).send(result);
});
app.delete("/quotes/:id/", function (req, resp) {
    var result;
    var id = req.params.id;
    quotes.splice(id, 1);
    result = "Deleted";
    resp.status(HTTP.NO_CONTENT).send(result);
});
app.post("/quotes/create", function (req, resp) {
    var title = req.body.title;
    var description = req.body.description;
    var rating = 0;
    var date = new Date();
    quotes.push({ title: title, description: description, rating: rating, date: date });
    var result = "created";
    resp.status(HTTP.CREATED).send(result);
});
app.get("/quotes/list", function (req, resp) {
    var result = new hal_1.Resource({}, "http://localhost:3000/quotes/list");
    for (var i = 0; i < quotes.length; i++) {
        result.link(quotes[i].title, "http://localhost:3000/quotes/" + i);
        result.embed("quotes", quotes[i]);
    }
    resp.status(HTTP.OK).json(result);
});
app.get("/quotes/highestrated", function (req, resp) {
    var result = new hal_1.Resource({}, "http://localhost:3000/quotes/highestrated");
    quotes.sort(function (a, b) { return b.rating > a.rating ? 1 : -1; });
    for (var i = 0; i < quotes.length; i++) {
        var title = quotes[i].title;
        var description = quotes[i].description;
        var rating = quotes[i].rating;
        var date = quotes[i].date;
        result.link(quotes[i].title, "http://localhost:3000/quotes/" + i);
        result.embed("quotes", quotes[i]);
    }
    resp.status(HTTP.OK).send(result);
});
app.get("/quotes/newest", function (req, resp) {
    var result = new hal_1.Resource({}, "http://localhost:3000/quotes/newest");
    quotes.sort(function (a, b) { return b.date - a.date; });
    for (var i = 0; i < quotes.length; i++) {
        var title = quotes[i].title;
        var description = quotes[i].description;
        var rating = quotes[i].rating;
        var date = quotes[i].date;
        result.link(quotes[i].title, "http://localhost:3000/quotes/" + i);
        result.embed("quotes", quotes[i]);
    }
    resp.status(HTTP.OK).send(result);
});
app.get("/quotes/:id", function (req, resp) {
    var id = req.params.id;
    var result = new hal_1.Resource(quotes[id], "/quotes/" + id);
    result.link("Quote: " + "Delete quote", "http://localhost:3000//quotes/:id/");
    result.link("Quote: " + "Upvote quote", "http://localhost:3000//quotes/:id/upvote");
    result.link("Quote: " + "Downvote quote", "http://localhost:3000///quotes/:id/downvote");
    result.embed("quotes", quotes[id]);
    resp.status(HTTP.OK).send(result);
});
console.log("server listing on port 3000");
app.listen(3000);
