using System.Threading.Tasks;
using AutoMapper;
using FilmsStore.BusinessLogic.Interfaces;
using FilmsStore.BusinessLogic.Models;
using FilmsStore.WebApi.Filters;
using FilmsStore.WebApi.Models;
using Microsoft.AspNetCore.Mvc;

namespace FilmsStore.WebApi.Controllers
{
    [Route("api/[controller]")]
    [ServiceFilter(typeof(ExceptionFilter))]
    public class FilmsController : ControllerBase
    {
        private readonly IFilmService _filmService;
        private readonly IMapper _mapper;
        public FilmsController(IFilmService filmService, IMapper mapper)
        {
            _filmService = filmService;
            _mapper = mapper;
        }

        // GET api/films
        [HttpGet]
        public async Task<ActionResult<FilmListViewModel>> GetFilms(int page = 1, string search = null)
        {
            FilmListViewModel filmList = new FilmListViewModel();
            FilmListModel model = await _filmService.GetFilmsAsync(page, search);
            filmList = _mapper.Map<FilmListModel, FilmListViewModel>(model);

            return Ok(filmList);
        }

        // GET api/films/all
        [HttpGet("all")]
        public async Task<ActionResult<FilmListViewModel>> GetAllFilms(string search = null)
        {
            FilmListViewModel filmList = new FilmListViewModel();
            FilmListModel model = await _filmService.GetAllFilmsAsync(search);
            filmList = _mapper.Map<FilmListModel, FilmListViewModel>(model);

            return Ok(filmList);
        }

        // GET api/films/5
        [HttpGet("{id}")]
        public async Task<ActionResult<FilmDetailsViewModel>> GetFilmDetails(int id)
        {
            FilmDetailsModel film = await _filmService.GetFilmByIdAsync(id);
            return Ok(_mapper.Map<FilmDetailsModel, FilmDetailsViewModel>(film));
        }

        // GET api/films/rating/5
        [HttpGet("rating/{id}")]
        public async Task<ActionResult<double>> GetTotalRating(int id)
        {
            return Ok(await _filmService.GetTotalRatingByFilmIdAsync(id));
        }
    }
}