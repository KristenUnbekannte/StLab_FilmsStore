using System.ComponentModel.DataAnnotations;

namespace FilmsStore.WebApi.Models
{
    public class RatingViewModel
    {
        [Required]
        public int FilmId { get; set; }
        public string UserId { get; set; }
        [Required]
        public int Value { get; set; }
    }
}
