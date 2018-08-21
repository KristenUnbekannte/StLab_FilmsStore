using FilmsStore.Domain.Entities;

namespace FilmsStore.BusinessLogic.Models
{
    class ReviewModel
    {
        public int RatingId { get; set; }
        public int FilmId { get; set; }
        public string UserId { get; set; }
        public int Value { get; set; }
        public Film Film { get; set; }
        public User User { get; set; }
    }
}
