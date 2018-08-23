using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace FilmsStore.Domain.Entities
{
    public class Film
    {
        [Required]
        public int FilmId { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public string Country { get; set; }
        [Required]
        public int Year { get; set; }
        [Required]
        public string Genre { get; set; }
        [Required]
        public string Producer { get; set; }
        public double Rating { get; set; }
        [Required]
        public string ImageUrl { get; set; }
        public string VideoUrl { get; set; }
        public string Description { get; set; }
        public ICollection<Image> Images { get; set; }
        public ICollection<Rating> Ratings { get; set; }
        public ICollection<Comment> Comments { get; set; }
    }
}
