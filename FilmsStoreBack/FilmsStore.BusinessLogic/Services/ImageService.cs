using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using FilmsStore.BusinessLogic.Exceptions;
using FilmsStore.BusinessLogic.Interfaces;
using FilmsStore.BusinessLogic.Models;
using FilmsStore.Domain.Entities;
using FilmsStore.Domain.Interfaces;

namespace FilmsStore.BusinessLogic.Services
{
    public class ImageService : IImageService
    {
        private readonly IImageRepository _imageRepository;
        private readonly IMapper _mapper;
        public ImageService(IImageRepository imageRepository, IMapper mapper)
        {
            _imageRepository = imageRepository;
            _mapper = mapper;
        }

        public async Task<IList<ImageModel>> GetImagesByFilmIdAsync(int id)
        {
            IList<Image> images = await _imageRepository.GetImagesByFilmIdAsync(id);
            return _mapper.Map<IList<Image>, IList<ImageModel>>(images);
        }
        public async Task AddImageAsync(ImageModel model)
        {
            Image image = _mapper.Map<ImageModel, Image>(model);
            await _imageRepository.AddImageAsync(image);
        }
        public async Task EditImageAsync(ImageModel model)
        {
            Image image = _mapper.Map<ImageModel, Image>(model);
            if (image == null) throw new ImageNotExistException("Image not exist");

            await _imageRepository.EditImageAsync(image);
        }
        public async Task<ImageModel> DeleteImageAsync(int id)
        {
            Image image = await _imageRepository.DeleteImageAsync(id);
            if (image == null) throw new ImageNotExistException("Image not exist");

            return _mapper.Map<Image, ImageModel>(image);
        }
    }
}
