using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using FilmsStore.BusinessLogic.Interfaces;
using FilmsStore.BusinessLogic.Models;
using FilmsStore.WebApi.Extensions;
using FilmsStore.WebApi.Models;
using FilmsStore.WebApi.SignalR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;

namespace FilmsStore.WebApi.Controllers
{
    [Route("api/[controller]")]
    public class CommentController : ControllerBase
    {
        private readonly ICommentService _commentService;
        private readonly IMapper _mapper;
        private readonly IHubContext<CommentHub> _hubContext;
        public CommentController(ICommentService commentService, IMapper mapper, IHubContext<CommentHub> hubContext)
        {
            _commentService = commentService;
            _mapper = mapper;
            _hubContext = hubContext;
        }

        // GET api/comment/5
        [HttpGet("{id}")]
        public async Task<ActionResult<IEnumerable<CommentViewModel>>> GetComments(int id)
        {
            IList<CommentModel> comments = await _commentService.GetCommentsByFilmIdAsync(id);
            return Ok(_mapper.Map<IList<CommentModel>, IList<CommentViewModel>>(comments));
        }

        // POST api/comment
        [Authorize]
        [HttpPost]
        public async Task<IActionResult> AddComment([FromBody]CommentViewModel model)
        {
            if (ModelState.IsValid)
            {
                model.UserId = HttpContext.GetUserIdAsync();
                CommentModel comment = _mapper.Map<CommentViewModel, CommentModel>(model);              
                await _hubContext.Clients.All.SendAsync("GetComment", await _commentService.AddCommentAsync(comment));
                return Ok();
            }
            return BadRequest(ModelState);
        }
    }
}