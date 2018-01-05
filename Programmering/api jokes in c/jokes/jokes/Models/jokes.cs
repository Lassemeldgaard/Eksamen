using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace jokes.Models
{
    public class JokeModel
    {
        public int rating { get; set; }
        public string joke { get; set; }

        public List<JokeModel> Ijokelist { get; set; }
    }
}