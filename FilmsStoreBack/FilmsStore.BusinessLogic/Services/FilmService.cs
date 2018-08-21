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
        private readonly IFilmRepository _repository;
        public FilmService(IFilmRepository repository)
        {
            _repository = repository;
        }
        public async Task<IList<FilmModel>> GetFilmsAsync()
        {
            IList<Film> films = await _repository.GetFilmsAsync();
            return Mapper.Map<IList<Film>, IList<FilmModel>>(films);
        }
        public async Task<FilmDetailsModel> GetFilmByIdAsync(int id)
        {
            Film film = await _repository.GetFilmByIdAsync(id);
            return Mapper.Map<Film, FilmDetailsModel>(film);
        }
    }
}
