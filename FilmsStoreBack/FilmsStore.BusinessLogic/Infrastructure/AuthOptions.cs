using System.Text;
using Microsoft.IdentityModel.Tokens;

namespace FilmsStore.BusinessLogic.Infrastructure
{
    public class AuthOptions
    {
        public const string ISSUER = "FilmsAuthServer"; 
        public const string AUDIENCE = "FilmsStoreApplication"; 
        const string KEY = "mysupersecret_secretkey!12345"; 
        public const int LIFETIME = 30;
        public static SymmetricSecurityKey GetSymmetricSecurityKey()
        {
            return new SymmetricSecurityKey(Encoding.ASCII.GetBytes(KEY));
        }
    }
}
