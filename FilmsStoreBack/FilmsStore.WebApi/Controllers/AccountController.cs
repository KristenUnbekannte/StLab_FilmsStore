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
        public AccountController(IUserService userService)
        {
            _userService = userService;
        }

        // POST api/account/register
        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody]RegistrationViewModel model)
        {
            if (ModelState.IsValid)
            {
                UserModel user = Mapper.Map<RegistrationViewModel, UserModel>(model);
                AuthorizationResultModel result = await _userService.RegisterAsync(user);
                if (result.isSuccessful)
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
                UserModel user = Mapper.Map<LoginViewModel, UserModel>(model);
                AuthorizationResultModel result = await _userService.LoginAsync(user);
                if (result.isSuccessful)
                {
                    return Ok(new { access_token = result.Token });
                }
                return BadRequest(result.Errors);
            }
            return BadRequest(ModelState);
        }
    }
}