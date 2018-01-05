using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using jokes.Models;

namespace jokes.Controllers
{
    public class HomeController : Controller
    {
        List<JokeModel> newjokes = new List<JokeModel>();
        public ActionResult Index(JokeModel jokeprop)
        {
            
            string dadurl = "https://icanhazdadjoke.com/";
            string chuckurl = "https://api.chucknorris.io/jokes/random";

            jokeprop.Ijokelist = Joke(chuckurl, "value");
            jokeprop.Ijokelist = Joke(dadurl, "joke");
            ViewBag.List = jokeprop.Ijokelist;
            return View(jokeprop);
        }

        public List<JokeModel> Joke(string url, string value)
        {
            JokeModel hej = new JokeModel();
            string response;
            using (WebClient client = new WebClient())
            {
                client.Headers.Add("accept", "application/json");
                response = client.DownloadString(url);
            }
            var jObject = JObject.Parse(response);
            hej.joke = (string)jObject[value];
            hej.rating = 0;
            newjokes.Add(hej);

            return newjokes;
        }
        public ActionResult Rating(JokeModel jokeprop)
        {

            string dadurl = "https://icanhazdadjoke.com/";
            string chuckurl = "https://api.chucknorris.io/jokes/random";

            jokeprop.Ijokelist = Joke(chuckurl, "value");
            jokeprop.Ijokelist = Joke(dadurl, "joke");
            ViewBag.List = jokeprop.Ijokelist;
            return View(jokeprop);
        }
    }
}