using System.ComponentModel.DataAnnotations;

namespace FilmsStore.Domain.Entities
{
    public class Rating
    {
        [Required]
        public int RatingId { get; set; }
        [Required]
        public int FilmId { get; set; }
        [Required]
        public string UserId { get; set; }
        [Required]
        public int Value { get; set; }
        public User User { get; set; }
    }
}
