using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using FilmsStore.BusinessLogic.Interfaces;
using FilmsStore.BusinessLogic.Models;
using FilmsStore.WebApi.Models;
using Microsoft.AspNetCore.Mvc;

namespace FilmsStore.WebApi.Controllers
{
    [Route("api/[controller]")]
    public class FilmsController : ControllerBase
    {
        private readonly IFilmService _filmService;
        public FilmsController(IFilmService filmService)
        {
            _filmService = filmService;
        }

        // GET api/films
        [HttpGet]
        public async Task<ActionResult<IEnumerable<FilmViewModel>>> Get()
        {
            IList<FilmModel> films = await _filmService.GetFilmsAsync();
            return Ok(Mapper.Map<IList<FilmModel>, IList<FilmViewModel>>(films));
        }

        // GET api/films/5
        [HttpGet("{id}")]
        public async Task<ActionResult<FilmDetailsViewModel>> Get(int id)
        {
            FilmDetailsModel film = await _filmService.GetFilmByIdAsync(id);
            return Ok(Mapper.Map<FilmDetailsModel, FilmDetailsViewModel>(film));
        }

        // GET api/films/rating/5
        [HttpGet("rating/{id}")]
        public async Task<ActionResult<double>> GetTotalRating(int id)
        {
            return Ok(await _filmService.GetTotalRatingByFilmIdAsync(id));
        }
    }
}