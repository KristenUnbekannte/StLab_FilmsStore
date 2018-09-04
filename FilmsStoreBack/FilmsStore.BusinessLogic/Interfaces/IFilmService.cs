using System.Collections.Generic;
using System.Threading.Tasks;
using FilmsStore.BusinessLogic.Models;

namespace FilmsStore.BusinessLogic.Interfaces
{
    public interface IFilmService
    {
        Task<FilmListModel> GetFilmsAsync(int page, string search);
        Task<FilmDetailsModel> GetFilmByIdAsync(int id);
        Task UpdateTotalRatingByFilmIdAsync(int id);
        Task<double> GetTotalRatingByFilmIdAsync(int id);
        Task AddFilmAsync(FilmDetailsModel model);
        Task EditFilmAsync(FilmDetailsModel model);
        Task<FilmDetailsModel> DeleteFilmAsync(int id);
    }
}
