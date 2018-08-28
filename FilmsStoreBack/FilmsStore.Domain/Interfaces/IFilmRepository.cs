using System.Collections.Generic;
using System.Threading.Tasks;
using FilmsStore.Domain.Entities;

namespace FilmsStore.Domain.Interfaces
{
    public interface IFilmRepository
    {
        Task<IList<Film>> GetFilmsAsync();
        Task<Film> GetFilmByIdAsync(int id);
        Task UpdateFilmByIdAsync(Film film);
        Task AddFilmAsync(Film film);
        Task EditFilmAsync(Film film);
        Task<Film> DeleteFilmAsync(int id);
    }
}
