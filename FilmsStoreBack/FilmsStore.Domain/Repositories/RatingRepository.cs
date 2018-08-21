using System.Linq;
using System.Threading.Tasks;
using FilmsStore.Domain.EF;
using FilmsStore.Domain.Entities;
using FilmsStore.Domain.Interfaces;

namespace FilmsStore.Domain.Repositories
{
    public class RatingRepository : IRatingRepository
    {
        private readonly ApplicationContext _context;
        public RatingRepository(ApplicationContext context)
        {
            _context = context;
        }
        public async Task AddRatingAsync(Rating rating)
        {
            await _context.Ratings.AddAsync(rating);
            await _context.SaveChangesAsync();
        }

        public int GetCountByFilmIdAsync(int id)
        {
            return _context.Ratings.Where(r=>r.FilmId==id).Count();
        }
    }
}
