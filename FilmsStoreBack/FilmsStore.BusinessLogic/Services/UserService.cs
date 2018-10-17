using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using FilmsStore.BusinessLogic.Interfaces;
using FilmsStore.BusinessLogic.Models;
using FilmsStore.Domain.Entities;
using Microsoft.AspNetCore.Identity;

namespace FilmsStore.BusinessLogic.Services
{
    public class UserService : IUserService
    {
        private readonly UserManager<User> _userManager;
        private readonly SignInManager<User> _signInManager;
        private readonly ITokenService _tokenService;
        private readonly IMapper _mapper;
        public UserService(UserManager<User> userManager, SignInManager<User> signInManager,
            ITokenService tokenService, IMapper mapper)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _tokenService = tokenService;
            _mapper = mapper;
        }

        public async Task<AuthorizationResultModel> RegisterAsync(UserModel model)
        {
            User user = _mapper.Map<UserModel, User>(model);
            var result = await _userManager.CreateAsync(user, model.Password);

            AuthorizationResultModel registrationResult = new AuthorizationResultModel();
            if (result.Succeeded)
            {
                string role = "user";
                await _userManager.AddToRoleAsync(user, role);
                await _signInManager.SignInAsync(user, false);

                registrationResult.IsSuccessful = true;
                registrationResult.Token = await _tokenService.GetToken(user);
                registrationResult.UserName = model.UserName;
                registrationResult.Role = role;

                return registrationResult;
            }
            foreach (var error in result.Errors)
            {
                registrationResult.Errors.Add(error.Description);
            }
            return registrationResult;
        }
        public async Task<AuthorizationResultModel> LoginAsync(UserModel model)
        {
            var result = await _signInManager.PasswordSignInAsync(model.UserName, model.Password, false, false);

            AuthorizationResultModel loginResult = new AuthorizationResultModel();
            if (result.Succeeded)
            {
                User user = await _userManager.FindByNameAsync(model.UserName);

                loginResult.Token = await _tokenService.GetToken(user);
                loginResult.IsSuccessful = true;
                loginResult.UserName = model.UserName;
                loginResult.Role = (await _userManager.GetRolesAsync(user)).First();

                return loginResult;
            }
            loginResult.Errors.Add("Invalid username or password");
            return loginResult;
        }
    }
}
