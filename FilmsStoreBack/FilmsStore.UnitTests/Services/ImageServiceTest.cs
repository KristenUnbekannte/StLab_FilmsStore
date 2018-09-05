using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using FilmsStore.BusinessLogic.Exceptions;
using FilmsStore.BusinessLogic.Models;
using FilmsStore.BusinessLogic.Services;
using FilmsStore.Domain.Entities;
using FilmsStore.Domain.Interfaces;
using FilmsStore.WebApi.Profiles;
using Moq;
using Xunit;

namespace FilmsStore.UnitTests.Services
{
    public class ImageServiceTest
    {
        private Mock<IImageRepository> imageRepository;
        private IMapper mapper;

        public ImageServiceTest()
        {
            imageRepository = new Mock<IImageRepository>();
            var config = new MapperConfiguration(cfg =>
            {
                cfg.AddProfile(new MappingProfile());
            });
            mapper = config.CreateMapper();
        }

        private IList<Image> imagesList = new List<Image>()
        {
            new Image {ImageId = 1,FilmId = 2, Url = "https://image1"},
            new Image {ImageId = 2, FilmId = 2, Url = "https://image2"}
        };

        [Fact]
        public async Task TestGetImagesByFilmIdAsync_ReturnAllImagesSuccessfully()
        {
            // Arrange
            int filmId = 2;
            imageRepository.Setup(i => i.GetImagesByFilmIdAsync(filmId)).ReturnsAsync(imagesList);
            ImageService service = new ImageService(imageRepository.Object, mapper);

            // Act
            var result = await service.GetImagesByFilmIdAsync(filmId);

            // Assert
            Assert.NotNull(result);
            Assert.Equal(imagesList.Count, result.Count);
            Assert.Equal("https://image1", result.First().Url);
        }      

        [Fact]
        public async Task TestDeleteImageAsync_GetValidId_ReturnDeletedImageSuccessfully()
        {
            // Arrange
            int imageId = 2;
            imageRepository.Setup(i => i.DeleteImageAsync(imageId)).ReturnsAsync(imagesList.FirstOrDefault(i=>i.ImageId==imageId));
            ImageService service = new ImageService(imageRepository.Object, mapper);

            // Act
            var result = await service.DeleteImageAsync(imageId);

            // Assert
            Assert.NotNull(result);
            Assert.Equal(imagesList.FirstOrDefault(i=>i.ImageId==imageId).Url, result.Url);
        }

        [Fact]
        public async Task TestDeleteImageAsync_GetInvalidId_ThrowIamgeNotExistException()
        {
            // Arrange
            int imageId = 5;
            imageRepository.Setup(i => i.DeleteImageAsync(imageId)).ReturnsAsync(imagesList.FirstOrDefault(i => i.ImageId == imageId));
            ImageService service = new ImageService(imageRepository.Object, mapper);

            // Act, Assert
            await Assert.ThrowsAsync<ImageNotExistException>(() => service.DeleteImageAsync(imageId));
        }
    }
}
