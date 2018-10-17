using System.Collections.Generic;
using FilmsStore.Domain.Entities;

namespace FilmsStore.BusinessLogic.Models
{
    public class FilmDetailsModel
    {
        public int FilmId { get; set; }
        public string Name { get; set; }
        public string Country { get; set; }
        public int Year { get; set; }
        public string Genre { get; set; }
        public string Producer { get; set; }
        public double Rating { get; set; }
        public string ImageUrl { get; set; }
        public string VideoUrl { get; set; }
        public string Description { get; set; }
    }
}
