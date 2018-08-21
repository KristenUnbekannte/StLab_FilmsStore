using Microsoft.AspNetCore.Identity;

namespace FilmsStore.BusinessLogic.Interfaces
{
    public interface ITokenService
    {
        string GetToken(IdentityUser user);
    }
}
