import * as Express from 'express';
import * as request from 'request';
/*import { json } from 'express';*/

let app = Express();

app.get("/", (req, resp) =>{

    console.log("index page")
    resp.sendFile(__dirname + "/index.html")
    
});


app.get("/dadjoke/", (req, resp) => {
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
        console.log(body);
        resp.json(joke.joke)

    });


});
app.get("/chuckjoke/", (req, resp) => {
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
        console.log(body);
        resp.json(chuckjoke.value)
    });  
});

app.get("/RateDad/", (req, resp) => {
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
        console.log(body);
        resp.json(chuckjoke.value)
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