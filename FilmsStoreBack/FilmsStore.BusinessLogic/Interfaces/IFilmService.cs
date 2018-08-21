using System.Collections.Generic;
using System.Threading.Tasks;
using FilmsStore.BusinessLogic.Models;

namespace FilmsStore.BusinessLogic.Interfaces
{
    public interface IFilmService
    {
        Task<IList<FilmModel>> GetFilmsAsync();
        Task<FilmDetailsModel> GetFilmByIdAsync(int id);
    }
}
