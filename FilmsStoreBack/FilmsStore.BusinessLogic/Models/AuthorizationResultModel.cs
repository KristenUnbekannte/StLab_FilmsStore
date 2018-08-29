using System.Collections.Generic;

namespace FilmsStore.BusinessLogic.Models
{
    public class AuthorizationResultModel
    {
        public AuthorizationResultModel()
        {
            Errors = new List<string>();
        }
        public bool IsSuccessful { get; set; }
        public string Token { get; set; }
        public string UserName { get; set; }
        public string Role { get; set; }
        public List<string> Errors { get; set; }
    }
}
