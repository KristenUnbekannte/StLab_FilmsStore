using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FilmsStore.Domain.EF;
using FilmsStore.Domain.Entities;
using FilmsStore.Domain.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace FilmsStore.Domain.Repositories
{
    public class FilmRepository : IFilmRepository
    {
        private readonly ApplicationContext _context;
        public FilmRepository(ApplicationContext context)
        {
            _context = context;
        }
        public async Task<IList<Film>> GetFilmsAsync(int page, int pageSize, string search)
        {
            return await _context.Films
                .Where(f => (search == null || f.Name.ToUpper().Contains(search.ToUpper())))
                .OrderBy(f => f.FilmId).Skip((page - 1) * pageSize).Take(pageSize).ToListAsync();
        }
        public async Task<Film> GetFilmByIdAsync(int id)
        {
            return await _context.Films.FirstOrDefaultAsync(f => f.FilmId == id);
        }
        public async Task UpdateFilmByIdAsync(Film film)
        {
            if (_context.Films.Any(f => f.FilmId == film.FilmId))
            {
                _context.Films.Update(film);
            }
            await _context.SaveChangesAsync();
        }
        public async Task AddFilmAsync(Film film)
        {
            _context.Films.Add(film);
            await _context.SaveChangesAsync();
        }
        public async Task EditFilmAsync(Film film)
        {
            if (_context.Films.Any(f => f.FilmId == film.FilmId))
            {
                _context.Films.Update(film);
            }
            await _context.SaveChangesAsync();
        }
        public async Task<Film> DeleteFilmAsync(int id)
        {
            Film deletedFilm = await _context.Films.FindAsync(id);
            if (deletedFilm != null)
            {
                _context.Films.Remove(deletedFilm);
                await _context.SaveChangesAsync();
            }
            return deletedFilm;
        }
    }
}
