using System.Threading.Tasks;
using AutoMapper;
using FilmsStore.BusinessLogic.Interfaces;
using FilmsStore.BusinessLogic.Models;
using FilmsStore.WebApi.Models;
using Microsoft.AspNetCore.Mvc;

namespace FilmsStore.WebApi.Controllers
{
    [Route("api/[controller]")]
    public class AccountController : ControllerBase
    {
        private readonly IUserService _userService;
        private readonly IMapper _mapper;
        public AccountController(IUserService userService, IMapper mapper)
        {
            _userService = userService;
            _mapper = mapper;
        }

        // POST api/account/register
        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody]RegistrationViewModel model)
        {
            if (ModelState.IsValid)
            {
                UserModel user = _mapper.Map<RegistrationViewModel, UserModel>(model);
                AuthorizationResultModel result = await _userService.RegisterAsync(user);
                if (result.IsSuccessful)
                {
                    return Ok(new { access_token = result.Token });
                }
                return BadRequest(result.Errors );
            }
            return BadRequest(ModelState);
        }

        // POST api/account/login
        [HttpPost("login")]
        public async Task<IActionResult> Post([FromBody]LoginViewModel model)
        {
            if (ModelState.IsValid)
            {
                UserModel user = _mapper.Map<LoginViewModel, UserModel>(model);
                AuthorizationResultModel result = await _userService.LoginAsync(user);
                if (result.IsSuccessful)
                {
                    return Ok(new { access_token = result.Token });
                }
                return BadRequest(result.Errors);
            }
            return BadRequest(ModelState);
        }
    }
}