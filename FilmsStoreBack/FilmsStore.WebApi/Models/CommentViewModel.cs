using System.ComponentModel.DataAnnotations;

namespace FilmsStore.WebApi.Models
{
    public class CommentViewModel
    {
        [Required]
        public int FilmId { get; set; }
        public string UserId { get; set; }
        [Required]
        public string Message { get; set; }
        public string Date { get; set; }
        public string UserName { get; set; }



    }
}
