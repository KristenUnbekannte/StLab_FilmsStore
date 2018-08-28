using System.Threading.Tasks;
using AutoMapper;
using FilmsStore.BusinessLogic.Interfaces;
using FilmsStore.BusinessLogic.Models;
using FilmsStore.WebApi.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace FilmsStore.WebApi.Controllers
{
    [Route("api/[controller]")]
    [Authorize(Roles = "admin")]
    public class AdminController : ControllerBase
    {
        private readonly IFilmService _filmService;
        private readonly IMapper _mapper;
        public AdminController(IFilmService filmService, IMapper mapper)
        {
            _filmService = filmService;
            _mapper = mapper;
        }

        // POST api/admin/film
        [HttpPost("film")]
        public async Task<ActionResult> Post([FromBody] FilmDetailsViewModel model)
        {
            if (ModelState.IsValid)
            {
                FilmDetailsModel film = _mapper.Map<FilmDetailsViewModel, FilmDetailsModel>(model);
                if (model.FilmId == 0)
                {
                    await _filmService.AddFilmAsync(film);
                }
                else
                {
                    await _filmService.EditFilmAsync(film);
                }
                return Ok();
            }
            return BadRequest(ModelState);
        }

        // DELETE api/admin/film/5
        [HttpDelete("film/{id}")]
        public async Task<ActionResult> Delete(int id)
        {
            FilmDetailsModel film = await _filmService.DeleteFilmAsync(id);
            if (film != null)
            {
                return Ok(film.Name);
            }
            return BadRequest();
        }
    }
}