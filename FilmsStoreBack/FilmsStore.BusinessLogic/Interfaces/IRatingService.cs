using System.Threading.Tasks;
using FilmsStore.BusinessLogic.Models;

namespace FilmsStore.BusinessLogic.Interfaces
{
    public interface IRatingService
    {
        Task AddRatingByFilmIdAsync(RatingModel model);
    }
}
