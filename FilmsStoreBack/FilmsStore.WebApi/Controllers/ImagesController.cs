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
    public class ImagesController : ControllerBase
    {
        private readonly IImageService _imageService;
        private readonly IMapper _mapper;
        public ImagesController(IImageService imageService, IMapper mapper)
        {
            _imageService = imageService;
            _mapper = mapper;
        }

        // GET api/images/5
        [HttpGet("{id}")]
        public async Task<ActionResult<IEnumerable<ImageViewModel>>> GetImages(int id)
        {
            IList<ImageModel> images = await _imageService.GetImagesByFilmIdAsync(id);
            return Ok(_mapper.Map<IList<ImageModel>, IList<ImageViewModel>>(images));
        }
    }
}