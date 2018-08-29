using System.Collections.Generic;
using System.Threading.Tasks;
using FilmsStore.Domain.Entities;

namespace FilmsStore.Domain.Interfaces
{
    public interface IImageRepository
    {
        Task<IList<Image>> GetImagesByFilmIdAsync(int id);
        Task AddImageAsync(Image image);
        Task EditImageAsync(Image image);
        Task<Image> DeleteImageAsync(int id);

    }
}
