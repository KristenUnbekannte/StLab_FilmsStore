using System.Threading.Tasks;
using AutoMapper;
using FilmsStore.BusinessLogic.Interfaces;
using FilmsStore.BusinessLogic.Models;
using FilmsStore.WebApi.Extensions;
using FilmsStore.WebApi.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace FilmsStore.WebApi.Controllers
{
    [Route("api/[controller]")]
    public class RatingController : ControllerBase
    {
        private readonly IRatingService _ratingService;
        public RatingController(IRatingService ratingService)
        {
            _ratingService = ratingService;
        }

        // GET api/rating/5
        [HttpGet("{id}")]
        public ActionResult<bool> CheckRating(int id)
        {
            string userId = HttpContext.GetUserIdAsync();
            bool isMarked = _ratingService.CheckFilmIsMarkedByCurrentUser(id, userId);
            return Ok(isMarked);
        }

        // POST api/rating
        [Authorize]
        [HttpPost]
        public async Task<IActionResult> AddRating([FromBody]RatingViewModel model)
        {
            if (ModelState.IsValid)
            {
                model.UserId = HttpContext.GetUserIdAsync();
                RatingModel rating = Mapper.Map<RatingViewModel, RatingModel>(model);
                await _ratingService.AddRatingByFilmIdAsync(rating);
                return Ok();
            }
            return BadRequest(ModelState);
        }
    }
}