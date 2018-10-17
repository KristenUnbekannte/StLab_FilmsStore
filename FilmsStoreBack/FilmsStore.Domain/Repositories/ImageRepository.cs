using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FilmsStore.Domain.EF;
using FilmsStore.Domain.Entities;
using FilmsStore.Domain.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace FilmsStore.Domain.Repositories
{
    public class ImageRepository : IImageRepository
    {
        private readonly ApplicationContext _context;
        public ImageRepository(ApplicationContext context)
        {
            _context = context;
        }
        public async Task<IList<Image>> GetImagesByFilmIdAsync(int id)
        {
            return await _context.Images.Where(i => i.FilmId == id).ToListAsync();
        }
        public async Task AddImageAsync(Image image)
        {
            _context.Images.Add(image);
            await _context.SaveChangesAsync();
        }
        public async Task EditImageAsync(Image image)
        {
            if (_context.Images.Any(i => i.ImageId == image.ImageId))
            {
                _context.Images.Update(image);
            }
            await _context.SaveChangesAsync();
        }
        public async Task<Image> DeleteImageAsync(int id)
        {
            Image deletedImage = await _context.Images.FindAsync(id);
            if (deletedImage != null)
            {
                _context.Images.Remove(deletedImage);
                await _context.SaveChangesAsync();
            }
            return deletedImage;
        }
    }
}
