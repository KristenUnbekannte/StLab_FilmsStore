using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using FilmsStore.BusinessLogic.Interfaces;
using FilmsStore.BusinessLogic.Models;
using FilmsStore.Domain.Entities;
using FilmsStore.Domain.Interfaces;

namespace FilmsStore.BusinessLogic.Services
{
    public class FilmService : IFilmService
    {
        private readonly IFilmRepository _filmRepository;
        private readonly IRatingRepository _ratingRepository;
        public FilmService(IFilmRepository repository, IRatingRepository ratingRepository)
        {
            _filmRepository = repository;
            _ratingRepository = ratingRepository;
        }
        public async Task<IList<FilmModel>> GetFilmsAsync()
        {
            IList<Film> films = await _filmRepository.GetFilmsAsync();
            return Mapper.Map<IList<Film>, IList<FilmModel>>(films);
        }
        public async Task<FilmDetailsModel> GetFilmByIdAsync(int id)
        {
            Film film = await _filmRepository.GetFilmByIdAsync(id);
            return Mapper.Map<Film, FilmDetailsModel>(film);
        }
        public async Task UpdateTotalRatingAsync(RatingModel model)
        {
            Film film = await _filmRepository.GetFilmByIdAsync(model.FilmId);
            int count = _ratingRepository.GetCountByFilmIdAsync(model.FilmId);
            film.Rating = Math.Round((film.Rating * count + model.Value) / (count + 1), 1);

            await _filmRepository.UpdateFilmByIdAsync(film);
        }

        public async Task<double> GetTotalRatingByFilmIdAsync(int id)
        {
            Film film = await _filmRepository.GetFilmByIdAsync(id);
            return film.Rating;
        }
    }
}
