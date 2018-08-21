using System;

namespace FilmsStore.BusinessLogic.Models
{
    public class FilmModel
    {
        public int filmId { get; set; }
        public string Name { get; set; }
        public int Year { get; set; }
        public string Genre { get; set; }
        public double Rating { get; set; }
        public string ImageUrl { get; set; }
    }
}
