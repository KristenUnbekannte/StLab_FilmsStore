using System.ComponentModel.DataAnnotations;

namespace FilmsStore.Domain.Entities
{
    public class Comment
    {
        [Required]
        public int CommentId { get; set; }
        [Required]
        public int FilmId { get; set; }
        [Required]
        public string UserId { get; set; }
        [Required]
        public string Message { get; set; }
        [Required]
        public string Date { get; set; }
        public User User { get; set; }
    }
}
