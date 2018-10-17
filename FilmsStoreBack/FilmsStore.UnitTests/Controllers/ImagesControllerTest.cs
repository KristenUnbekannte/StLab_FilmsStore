using AutoMapper;
using FilmsStore.BusinessLogic.Interfaces;
using FilmsStore.BusinessLogic.Models;
using FilmsStore.WebApi.Controllers;
using FilmsStore.WebApi.Models;
using FilmsStore.WebApi.Profiles;
using Microsoft.AspNetCore.Mvc;
using Moq;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Xunit;

namespace FilmsStore.UnitTests.Controllers
{
    public class ImagesControllerTest
    {
        private Mock<IImageService> imageService;
        private IMapper mapper;

        public ImagesControllerTest()
        {
            imageService = new Mock<IImageService>();
            var config = new MapperConfiguration(cfg =>
            {
                cfg.AddProfile(new MappingProfile());
            });
            mapper = config.CreateMapper();
        }

        private IList<ImageModel> imagesList = new List<ImageModel>()
        {
            new ImageModel {
                    FilmId = 1,
                    Url = "https://image1"
                },
            new ImageModel {
                    FilmId = 1,
                    Url = "https://image2"
                }
        };

        [Fact]
        public async Task TestGetImages_GetValidId_ReturnImagesSuccessfully()
        {
            // Arrange
            int filmId = 1;

            imageService.Setup(i => i.GetImagesByFilmIdAsync(filmId)).ReturnsAsync(imagesList);
            ImagesController controller = new ImagesController(imageService.Object, mapper);

            // Act
            var result = await controller.GetImages(filmId);

            // Assert
            var okResult = result.Result as OkObjectResult;
            Assert.NotNull(okResult);

            var images = okResult.Value as IEnumerable<ImageViewModel>;
            Assert.NotNull(images);
            Assert.Equal(imagesList.Count, images.Count());
            Assert.Equal("https://image1", images.FirstOrDefault().Url);

            imageService.Verify(i => i.GetImagesByFilmIdAsync(filmId), Times.Once);
        }
    }
}
