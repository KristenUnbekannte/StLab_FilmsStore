using System.Threading.Tasks;
using FilmsStore.BusinessLogic.Models;

namespace FilmsStore.BusinessLogic.Interfaces
{
    public interface IUserService
    {
        Task<AuthorizationResultModel> RegisterAsync(UserModel model);
        Task<AuthorizationResultModel> LoginAsync(UserModel model);
    }
}
