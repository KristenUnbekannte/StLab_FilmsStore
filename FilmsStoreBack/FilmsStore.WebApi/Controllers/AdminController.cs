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
        private readonly IImageService _imageService;
        private readonly IMapper _mapper;
        public AdminController(IFilmService filmService,
            IMapper mapper, IImageService imageService)
        {
            _filmService = filmService;
            _imageService = imageService;
            _mapper = mapper;
        }

        // POST api/admin/film
        [HttpPost("film")]
        public async Task<ActionResult> AddFilm([FromBody] FilmDetailsViewModel model)
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
        public async Task<ActionResult> DeleteFilm(int id)
        {
            FilmDetailsModel film = await _filmService.DeleteFilmAsync(id);
            if (film != null)
            {
                return Ok(film.Name);
            }
            return BadRequest();
        }

        // POST api/admin/images
        [HttpPost("image")]
        public async Task<ActionResult> AddImage([FromBody] ImageViewModel model)
        {
            if (ModelState.IsValid)
            {
                ImageModel image = _mapper.Map<ImageViewModel, ImageModel>(model);
                if (model.ImageId == 0)
                {
                    await _imageService.AddImageAsync(image);
                }
                else
                {
                    await _imageService.EditImageAsync(image);
                }
                return Ok();
            }
            return BadRequest(ModelState);
        }

        // DELETE api/admin/image/5
        [HttpDelete("image/{id}")]
        public async Task<ActionResult> DeleteImage(int id)
        {
            ImageModel image = await _imageService.DeleteImageAsync(id);
            if (image != null)
            {
                return Ok(image);
            }
            return BadRequest();
        }
    }
}