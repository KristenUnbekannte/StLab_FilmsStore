using System.ComponentModel.DataAnnotations;

namespace FilmsStore.WebApi.Models
{
    public class LoginViewModel
    {
        [Required]
        public string UserName { get; set; }
        [Required]
        public string Password { get; set; }
    }
}
