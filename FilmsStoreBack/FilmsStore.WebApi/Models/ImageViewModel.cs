using System.ComponentModel.DataAnnotations;

namespace FilmsStore.WebApi.Models
{
    public class ImageViewModel
    {
        public int ImageId { get; set; }
        [Required]
        public string Url { get; set; }
        [Required]
        public int FilmId { get; set; }
    }
}
