using System.Threading.Tasks;
using FilmsStore.Domain.Entities;

namespace FilmsStore.Domain.Interfaces
{
    public interface IRatingRepository
    {
        Task AddRatingAsync(Rating rating);
        int GetCountByFilmIdAsync(int id);
    }
}
