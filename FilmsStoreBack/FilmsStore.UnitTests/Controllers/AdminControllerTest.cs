using System.Threading.Tasks;
using AutoMapper;
using FilmsStore.BusinessLogic.Interfaces;
using FilmsStore.BusinessLogic.Models;
using FilmsStore.WebApi.Controllers;
using FilmsStore.WebApi.Models;
using FilmsStore.WebApi.Profiles;
using Microsoft.AspNetCore.Mvc;
using Moq;
using Xunit;

namespace FilmsStore.UnitTests.Controllers
{
    public class AdminControllerTest
    {
        private Mock<IFilmService> filmService;
        private Mock<IImageService> imageService;
        private IMapper mapper;

        public AdminControllerTest()
        {
            filmService = new Mock<IFilmService>();
            imageService = new Mock<IImageService>();
            var config = new MapperConfiguration(cfg =>
            {
                cfg.AddProfile(new MappingProfile());
            });
            mapper = config.CreateMapper();
        }

        FilmDetailsViewModel addFilmModel = new FilmDetailsViewModel() { FilmId = 0, Name = "The house" };
        FilmDetailsModel addFilm = new FilmDetailsModel() { FilmId = 0, Name = "The house" };
        FilmDetailsViewModel editFilmModel = new FilmDetailsViewModel() { FilmId = 0, Name = "The house" };
        FilmDetailsModel filmModel = new FilmDetailsModel() { FilmId = 1, Name = "The house" };

        ImageViewModel addImageModel = new ImageViewModel() { FilmId = 1, ImageId = 0, Url = "https://image1" };
        ImageModel addImage = new ImageModel() { FilmId = 1, ImageId = 0, Url = "https://image1" };
        ImageViewModel editImageModel = new ImageViewModel() { FilmId = 1, ImageId = 0, Url = "https://image1" };
        ImageModel imageModel = new ImageModel() { FilmId = 1, ImageId = 2, Url = "https://image1" };

        [Fact]
        public async Task TestAddFilm_GetValidNewModel_AddFilmSuccessfully()
        {
            // Arrange
            filmService.Setup(f => f.AddFilmAsync(addFilm));
            AdminController controller = new AdminController(filmService.Object, mapper, imageService.Object);

            // Act
            var result = await controller.AddFilm(addFilmModel) as OkResult;

            // Assert
            Assert.NotNull(result);
            Assert.Equal(200, result.StatusCode);

            //filmService.Verify(c => c.AddFilmAsync(addFilm), Times.Once);
        }

        [Fact]
        public async Task TestAddFilm_GetValidNewModel_EditFilmSuccessfully()
        {
            // Arrange
            filmService.Setup(f => f.EditFilmAsync(filmModel));
            AdminController controller = new AdminController(filmService.Object, mapper, imageService.Object);

            // Act
            var result = await controller.AddFilm(editFilmModel) as OkResult;

            // Assert
            Assert.NotNull(result);
            Assert.Equal(200, result.StatusCode);

            //filmService.Verify(c => c.AddFilmAsync(film), Times.Once);
        }

        [Fact]
        public async Task TestDeleteFilm_GetValidId_ReturnDeletedFilmsNameSuccessfully()
        {
            // Arrange
            int filmId = 1;
            filmService.Setup(f => f.DeleteFilmAsync(filmId)).ReturnsAsync(filmModel);
            AdminController controller = new AdminController(filmService.Object, mapper, imageService.Object);

            // Act
            var result = await controller.DeleteFilm(filmId) as OkObjectResult;

            // Assert
            Assert.NotNull(result);
            Assert.Equal(200, result.StatusCode);
            Assert.Equal("The house", result?.Value);

            filmService.Verify(c => c.DeleteFilmAsync(filmId), Times.Once);
        }

        [Fact]
        public async Task TestAddImage_GetValidImage_AddImageSuccessfully()
        {
            // Arrange          
            imageService.Setup(i => i.AddImageAsync(addImage));
            AdminController controller = new AdminController(filmService.Object, mapper, imageService.Object);

            // Act
            var result = await controller.AddImage(addImageModel) as OkResult;

            // Assert
            Assert.NotNull(result);
            Assert.Equal(200, result.StatusCode);
        }

        [Fact]
        public async Task TestAddImage_GetValidImage_EditImageSuccessfully()
        {
            // Arrange          
            imageService.Setup(i => i.EditImageAsync(imageModel));
            AdminController controller = new AdminController(filmService.Object, mapper, imageService.Object);

            // Act
            var result = await controller.AddImage(editImageModel) as OkResult;

            // Assert
            Assert.NotNull(result);
            Assert.Equal(200, result.StatusCode);
        }

        [Fact]
        public async Task TestDeleteImage_GetValidId_ReturnDeletedImageSuccessfully()
        {
            // Arrange
            int filmId = 1;
            imageService.Setup(f => f.DeleteImageAsync(filmId)).ReturnsAsync(imageModel);
            AdminController controller = new AdminController(filmService.Object, mapper, imageService.Object);

            // Act
            var result = await controller.DeleteImage(filmId) as OkObjectResult;

            // Assert
            Assert.NotNull(result);
            Assert.Equal(200, result.StatusCode);
            Assert.Equal(imageModel, result?.Value);

            imageService.Verify(c => c.DeleteImageAsync(filmId), Times.Once);
        }
    }
}
