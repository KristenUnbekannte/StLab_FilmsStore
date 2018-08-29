using System;

namespace FilmsStore.BusinessLogic.Models
{
    public class ImageModel
    {
        public int ImageId { get; set; }
        public string Url { get; set; }
        public int FilmId { get; set; }
    }
}
