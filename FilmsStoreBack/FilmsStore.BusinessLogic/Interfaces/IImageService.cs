using System.Collections.Generic;
using System.Threading.Tasks;
using FilmsStore.BusinessLogic.Models;

namespace FilmsStore.BusinessLogic.Interfaces
{
    public interface IImageService
    {
        Task<IList<ImageModel>> GetImagesByFilmIdAsync(int id);
        Task AddImageAsync(ImageModel model);
        Task EditImageAsync(ImageModel model);
        Task<ImageModel> DeleteImageAsync(int id);
    }
}
