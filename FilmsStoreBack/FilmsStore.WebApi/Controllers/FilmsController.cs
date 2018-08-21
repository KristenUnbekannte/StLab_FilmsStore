﻿using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using FilmsStore.BusinessLogic.Interfaces;
using FilmsStore.BusinessLogic.Models;
using FilmsStore.WebApi.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using FilmsStore.WebApi.Extensions;

namespace FilmsStore.WebApi.Controllers
{
    [Route("api/[controller]")]
    public class FilmsController : ControllerBase
    {
        private readonly IFilmService _filmService;
        private readonly ICommentService _commentService;
        private readonly IRatingService _ratingService;
        public FilmsController(IFilmService filmService, ICommentService commentService, IRatingService ratingService)
        {
            _filmService = filmService;
            _commentService = commentService;
            _ratingService = ratingService;
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

        // GET api/films/comments/5
        [HttpGet("comments/{id}")]
        public async Task<ActionResult<IEnumerable<CommentViewModel>>> GetComments(int id)
        {
            IList<CommentModel> comments = await _commentService.GetCommentsByFilmIdAsync(id);
            return Ok(Mapper.Map<IList<CommentModel>, IList<CommentViewModel>>(comments));
        }

        // GET api/films/rating/5
        [HttpGet("rating/{id}")]
        public async Task<ActionResult<double>> GetTotalRating(int id)
        {
            return Ok(await _filmService.GetTotalRatingByFilmIdAsync(id));
        }

        // POST api/films/comment
        [Authorize]
        [HttpPost("comment")]
        public async Task<IActionResult> AddComment([FromBody]CommentViewModel model)
        {
            if (ModelState.IsValid)
            {
                model.UserId = HttpContext.GetUserIdAsync();
                CommentModel comment = Mapper.Map<CommentViewModel, CommentModel>(model);
                await _commentService.AddCommentAsync(comment);
                return Ok();
            }
            return BadRequest(ModelState);
        }

        // POST api/films/rating
        [Authorize]
        [HttpPost("rating")]
        public async Task<IActionResult> AddRating([FromBody]RatingViewModel model)
        {
            if (ModelState.IsValid)
            {
                model.UserId = HttpContext.GetUserIdAsync();
                RatingModel comment = Mapper.Map<RatingViewModel, RatingModel>(model);
                await _ratingService.AddRatingByFilmIdAsync(comment);
                return Ok();
            }
            return BadRequest(ModelState);
        }
    }
}