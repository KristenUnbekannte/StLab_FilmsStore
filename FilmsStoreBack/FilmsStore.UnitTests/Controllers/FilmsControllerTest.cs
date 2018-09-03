using System.Collections.Generic;
using System.Linq;
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
    public class FilmsControllerTest
    {
        private Mock<IFilmService> filmService;
        private IMapper mapper;

        public FilmsControllerTest()
        {
            filmService = new Mock<IFilmService>();
            var config = new MapperConfiguration(cfg =>
            {
                cfg.AddProfile(new MappingProfile());
            });
            mapper = config.CreateMapper();
        }

        private IList<FilmModel> filmsList = new List<FilmModel>()
        {
            new FilmModel {
                    FilmId = 1,
                    Name = "The Lake House",
                    Year = 2006,
                    Rating = 4.4
                },
                new FilmModel {
                    FilmId = 2,
                    Name = "The House",
                    Year = 2016,
                    Rating = 3.7
                }
        };

        private IList<FilmDetailsModel> filmDetailsList = new List<FilmDetailsModel>()
        {
            new FilmDetailsModel {
                    FilmId = 1,
                    Name = "The Lake House",
                },
            new FilmDetailsModel {
                    FilmId = 2,
                    Name = "The House",
                }
        };

        [Fact]
        public async Task TestGetAllFilms_ReturnAllFilmsSuccessfully()
        {
            // Arrange
            int page = 1;
            string search = null;

            filmService.Setup(film => film.GetFilmsAsync(page, search)).ReturnsAsync(filmsList);
            FilmsController controller = new FilmsController(filmService.Object, mapper);

            // Act
            var result = await controller.GetAllFilms();

            // Assert
            var okResult = result.Result as OkObjectResult;
            Assert.NotNull(okResult);

            var films = okResult.Value as IEnumerable<FilmViewModel>;
            Assert.NotNull(films);
            Assert.Equal(filmsList.Count, films.Count());
            Assert.Equal(2006, films.FirstOrDefault().Year);

            filmService.Verify(f => f.GetFilmsAsync(page, search), Times.Once);
        }

        [Fact]
        public async Task TestGetFilmDetails_GetValidId_ReturnFilmDetailsSuccessfully()
        {
            // Arrange
            int filmId = 2;

            filmService.Setup(film => film.GetFilmByIdAsync(filmId))
                .ReturnsAsync(filmDetailsList.FirstOrDefault(f => f.FilmId == filmId));
            FilmsController controller = new FilmsController(filmService.Object, mapper);

            // Act
            var result = await controller.GetFilmDetails(filmId);

            // Assert
            var okResult = result.Result as OkObjectResult;
            Assert.NotNull(okResult);

            var filmDetails = okResult.Value as FilmDetailsViewModel;
            Assert.NotNull(filmDetails);
            Assert.Equal("The House", filmDetails.Name);

            filmService.Verify(f => f.GetFilmByIdAsync(filmId), Times.Once);
        }

        [Fact]
        public async Task TestGetTotalRating_GetValidId_ReturnTotalRatingSuccessfully()
        {
            // Arrange
            int filmId = 1;

            filmService.Setup(film => film.GetTotalRatingByFilmIdAsync(filmId))
                .ReturnsAsync(filmsList.FirstOrDefault(f => f.FilmId == filmId).Rating);
            FilmsController controller = new FilmsController(filmService.Object, mapper);

            // Act
            var result = await controller.GetTotalRating(filmId);

            // Assert
            var okResult = result.Result as OkObjectResult;
            Assert.NotNull(okResult);

            double? rating = okResult.Value as double?;
            Assert.NotNull(rating);
            Assert.Equal(4.4, rating);

            filmService.Verify(f => f.GetTotalRatingByFilmIdAsync(filmId), Times.Once);
        }
    }
}
