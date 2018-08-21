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
        public UserService(UserManager<User> userManager, SignInManager<User> signInManager, ITokenService tokenService)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _tokenService = tokenService;
        }

        public async Task<AuthorizationResultModel> RegisterAsync(UserModel model)
        {
            User user = Mapper.Map<UserModel, User>(model);
            var result = await _userManager.CreateAsync(user, model.Password);

            AuthorizationResultModel registrationResult = new AuthorizationResultModel();
            if (result.Succeeded)
            {
                await _signInManager.SignInAsync(user, false);
                registrationResult.isSuccessful = true;
                registrationResult.Token = _tokenService.GetToken(user);
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
                loginResult.Token = _tokenService.GetToken(user);
                loginResult.isSuccessful = true;
                return loginResult;
            }
            loginResult.Errors.Add("Invalid username or password");
            return loginResult;
        }
    }
}
