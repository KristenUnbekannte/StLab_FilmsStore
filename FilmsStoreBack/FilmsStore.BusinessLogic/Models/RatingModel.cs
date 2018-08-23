using FilmsStore.Domain.Entities;

namespace FilmsStore.BusinessLogic.Models
{
    public class RatingModel
    {
        public int FilmId { get; set; }
        public string UserId { get; set; }
        public int Value { get; set; }
        public User User { get; set; }
    }
}
