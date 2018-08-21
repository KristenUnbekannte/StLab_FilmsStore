using FilmsStore.Domain.Entities;

namespace FilmsStore.BusinessLogic.Models
{
    public class CommentModel
    {
        public int FilmId { get; set; }
        public string UserId { get; set; }
        public string Message { get; set; }
        public string UserName { get; set; }
        public string Date { get; set; }

    }
}
