﻿using System.Collections.Generic;
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
    public class FilmServiceTest
    {
        private Mock<IFilmRepository> filmRepository;
        private Mock<IRatingRepository> ratingRepository;
        private IMapper mapper;
        private int pageSize;

        public FilmServiceTest()
        {
            filmRepository = new Mock<IFilmRepository>();
            ratingRepository = new Mock<IRatingRepository>();
            pageSize = 6;

            var config = new MapperConfiguration(cfg =>
            {
                cfg.AddProfile(new MappingProfile());
            });
            mapper = config.CreateMapper();
        }

        private IList<Film> filmsList = new List<Film>()
        {
            new Film {
                    FilmId = 1,
                    Name = "The Lake House",
                    Year = 2006,
                    Rating = 4.4
                },
            new Film {
                    FilmId = 2,
                    Name = "The House",
                    Year = 2016,
                    Rating = 3.7
                }
        };

        [Fact]
        public async Task TestGetFilmsAsync_ReturnAllFilmsSuccessfully()
        {
            // Arrange
            int page = 1;
            string search = null;

            filmRepository.Setup(film => film.GetFilmsAsync(page, pageSize, search)).ReturnsAsync(filmsList);
            filmRepository.Setup(film => film.GetTotalCountFilmsAsync(search)).ReturnsAsync(filmsList.Count);
            FilmService service = new FilmService(filmRepository.Object, ratingRepository.Object, mapper);

            // Act
            var result = await service.GetFilmsAsync(page, search);

            // Assert
            var films = result as FilmListModel;
            Assert.NotNull(films);
            Assert.Equal(filmsList.Count, films.Films.Count());
            Assert.Equal(1, films.Films.FirstOrDefault().FilmId);
        }

        [Fact]
        public async Task TestGetFilmByIdAsync_GetValidId_ReturnFilmDetailsSuccessfully()
        {
            // Arrange
            int filmId = 2;
            filmRepository.Setup(f => f.GetFilmByIdAsync(filmId))
                .ReturnsAsync(filmsList.FirstOrDefault(f => f.FilmId == filmId));
            FilmService service = new FilmService(filmRepository.Object, ratingRepository.Object, mapper);

            // Act
            var result = await service.GetFilmByIdAsync(filmId);

            // Assert
            var film = result as FilmDetailsModel;
            Assert.NotNull(film);
            Assert.Equal(2016, film.Year);
        }

        [Fact]
        public async Task TestGetFilmByIdAsync_GetInvalidId_ThrowFilmNotExistException()
        {
            // Arrange
            int filmId = 3;
            filmRepository.Setup(f => f.GetFilmByIdAsync(filmId))
                .ReturnsAsync(filmsList.FirstOrDefault(f => f.FilmId == filmId));
            FilmService service = new FilmService(filmRepository.Object, ratingRepository.Object, mapper);

            // Act, Assert
            await Assert.ThrowsAsync<FilmNotExistException>(() => service.GetFilmByIdAsync(filmId));
        }

        [Fact]
        public async Task TestGetTotalRatingByFilmIdAsync_GetValidId_ReturnRatingSuccessfully()
        {
            // Arrange
            int filmId = 2;

            filmRepository.Setup(f => f.GetFilmByIdAsync(filmId))
                .ReturnsAsync(filmsList.FirstOrDefault(f => f.FilmId == filmId));

            FilmService service = new FilmService(filmRepository.Object, ratingRepository.Object, mapper);

            // Act
            var result = await service.GetTotalRatingByFilmIdAsync(filmId);

            //Assert
            Assert.IsType<double>(result);
            Assert.Equal(3.7, result);
        }

        [Fact]
        public async Task TestDeleteFilmAsync_GetValidId_ReturnDeletedFilmSuccessfully()
        {
            // Arrange
            int filmId = 2;

            filmRepository.Setup(f => f.DeleteFilmAsync(filmId))
                .ReturnsAsync(filmsList.FirstOrDefault(f => f.FilmId == filmId));

            FilmService service = new FilmService(filmRepository.Object, ratingRepository.Object, mapper);

            // Act
            var result = await service.DeleteFilmAsync(filmId);

            //Assert
            Assert.NotNull(result);
            Assert.Equal(3.7, result?.Rating);
        }

        [Fact]
        public async Task TestDeleteFilmAsync_GetInvalidId_ThrowFilmNotExistException()
        {
            // Arrange
            int filmId = 3;

            filmRepository.Setup(f => f.DeleteFilmAsync(filmId))
                .ReturnsAsync(filmsList.FirstOrDefault(f => f.FilmId == filmId));

            FilmService service = new FilmService(filmRepository.Object, ratingRepository.Object, mapper);

            // Act, Assert
            await Assert.ThrowsAsync<FilmNotExistException>(() => service.DeleteFilmAsync(filmId));
        }
    }
}
