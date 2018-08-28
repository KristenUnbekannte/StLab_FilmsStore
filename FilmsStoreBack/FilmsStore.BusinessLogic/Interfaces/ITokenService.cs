using System.Threading.Tasks;
using FilmsStore.Domain.Entities;

namespace FilmsStore.BusinessLogic.Interfaces
{
    public interface ITokenService
    {
        Task<string> GetToken(User user);
    }
}
