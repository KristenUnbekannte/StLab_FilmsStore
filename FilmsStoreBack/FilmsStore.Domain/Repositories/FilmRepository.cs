using System.Collections.Generic;
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
    }
}
