using System.Threading.Tasks;
using FilmsStore.Domain.Entities;

namespace FilmsStore.Domain.Interfaces
{
    public interface IRatingRepository
    {
        Task AddRatingAsync(Rating rating);
        Task<double> GetAverageRatingByFilmId(int id);
        Task<Rating> GetRatingByFilmIdandUserIdAsync(int id, string userId);
        Task UpdateRatingAsync(Rating rating);
        bool CheckFilmIsMarkedByCurrentUser(int id, string userId);
    }
}
