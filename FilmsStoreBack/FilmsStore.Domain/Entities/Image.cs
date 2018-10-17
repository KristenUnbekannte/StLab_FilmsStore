using System.ComponentModel.DataAnnotations;

namespace FilmsStore.Domain.Entities
{
    public class Image
    {
        [Required]
        public int ImageId { get; set; }
        [Required]
        public string Url { get; set; }
        [Required]
        public int FilmId { get; set; }
        public Film Film { get; set; }
    }
}
