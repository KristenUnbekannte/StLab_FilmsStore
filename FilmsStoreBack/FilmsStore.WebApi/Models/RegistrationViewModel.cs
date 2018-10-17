using System.ComponentModel.DataAnnotations;

namespace FilmsStore.WebApi.Models
{
    public class RegistrationViewModel
    {
        [Required]
        public string UserName { get; set; }
        [Required]
        public string Password { get; set; }
    }
}
