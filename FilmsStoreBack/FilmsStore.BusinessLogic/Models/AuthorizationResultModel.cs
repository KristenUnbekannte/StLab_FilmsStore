using System.Collections.Generic;

namespace FilmsStore.BusinessLogic.Models
{
    public class AuthorizationResultModel
    {
        public AuthorizationResultModel()
        {
            Errors = new List<string>();
        }
        public bool isSuccessful { get; set; }
        public string Token { get; set; }
        public List<string> Errors { get; set; }
    }
}
