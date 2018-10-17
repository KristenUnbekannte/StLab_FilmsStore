using System.Linq;
using System.Threading.Tasks;
using FilmsStore.Domain.EF;
using FilmsStore.Domain.Entities;
using FilmsStore.Domain.Interfaces;
using Microsoft.EntityFrameworkCore;

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

        public async Task<double> GetAverageRatingByFilmId(int id)
        {
            return await _context.Ratings.Where(r => r.FilmId == id).AverageAsync(r => r.Value);
        }

        public bool CheckFilmIsMarkedByCurrentUser(int id, string userId)
        {
            return _context.Ratings.Any(r => r.FilmId == id && r.UserId == userId);
        }

        public async Task<Rating> GetRatingByFilmIdandUserIdAsync(int id, string userId)
        {
            return await _context.Ratings.FirstOrDefaultAsync(r => r.FilmId == id && r.UserId == userId);
        }

        public async Task UpdateRatingAsync(Rating rating)
        {
            _context.Ratings.Update(rating);
            await _context.SaveChangesAsync();
        }
    }
}
