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
    public class FilmService : IFilmService
    {
        private readonly IFilmRepository _filmRepository;
        private readonly IRatingRepository _ratingRepository;
        private readonly IMapper _mapper;
        private int pageSize;
        public FilmService(IFilmRepository repository,
            IRatingRepository ratingRepository, IMapper mapper)
        {
            _filmRepository = repository;
            _ratingRepository = ratingRepository;
            _mapper = mapper;
            pageSize = 6;
        }
        public async Task<IList<FilmModel>> GetFilmsAsync(int page , string search)
        {
            IList<Film> films = await _filmRepository.GetFilmsAsync(page, pageSize, search);
            return _mapper.Map<IList<Film>, IList<FilmModel>>(films);
        }
        public async Task<FilmDetailsModel> GetFilmByIdAsync(int id)
        {
            Film film = await _filmRepository.GetFilmByIdAsync(id);
            if (film == null) throw new FilmNotExistException("Film not exist");

            return _mapper.Map<Film, FilmDetailsModel>(film);
        }
        public async Task UpdateTotalRatingByFilmIdAsync(int id)
        {
            Film film = await _filmRepository.GetFilmByIdAsync(id);
            if (film == null) throw new FilmNotExistException("Film not exist");

            film.Rating = await _ratingRepository.GetAverageRatingByFilmId(id);
            await _filmRepository.UpdateFilmByIdAsync(film);
        }
        public async Task<double> GetTotalRatingByFilmIdAsync(int id)
        {
            Film film = await _filmRepository.GetFilmByIdAsync(id);
            if (film == null) throw new FilmNotExistException("Film not exist");

            return film.Rating;
        }
        public async Task AddFilmAsync(FilmDetailsModel model)
        {
            Film film = _mapper.Map<FilmDetailsModel, Film>(model);
            await _filmRepository.AddFilmAsync(film);
        }
        public async Task EditFilmAsync(FilmDetailsModel model)
        {
            Film film = _mapper.Map<FilmDetailsModel, Film>(model);
            if (film == null) throw new FilmNotExistException("Film not exist");

            await _filmRepository.EditFilmAsync(film);
        }
        public async Task<FilmDetailsModel> DeleteFilmAsync(int id)
        {
            Film film = await _filmRepository.DeleteFilmAsync(id);
            if (film == null) throw new FilmNotExistException("Film not exist");

            return _mapper.Map<Film, FilmDetailsModel>(film);
        }
    }
}
