using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FilmsStore.Domain.EF;
using FilmsStore.Domain.Entities;
using FilmsStore.Domain.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace FilmsStore.Domain.Repositories
{
    public class FilmRepository: IFilmRepository
    {
        private readonly ApplicationContext _context;
        public FilmRepository(ApplicationContext context)
        {
            _context = context;
        }
        public async Task<IList<Film>> GetFilmsAsync()
        {
            return await _context.Films.ToListAsync();
        }
        public async Task<Film> GetFilmByIdAsync(int id)
        {
            return await _context.Films.Include(f => f.Images).FirstOrDefaultAsync(f => f.FilmId == id);
        }
        public async Task UpdateFilmByIdAsync(Film film)
        {
            if (_context.Films.Any(f => f.FilmId == film.FilmId))
            {
                _context.Films.Update(film);
            }
            await _context.SaveChangesAsync();
        }
    }
}
