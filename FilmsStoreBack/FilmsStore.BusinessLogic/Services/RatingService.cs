using System.Threading.Tasks;
using AutoMapper;
using FilmsStore.BusinessLogic.Interfaces;
using FilmsStore.BusinessLogic.Models;
using FilmsStore.Domain.Entities;
using FilmsStore.Domain.Interfaces;

namespace FilmsStore.BusinessLogic.Services
{
    public class RatingService : IRatingService
    {
        private readonly IFilmService _filmService;
        private readonly IRatingRepository _ratingRepository;
        private readonly IUserRepository _userRepository;
        public RatingService(IRatingRepository ratingRepository, IUserRepository userRepository, IFilmService filmService)
        {
            _ratingRepository = ratingRepository;
            _userRepository = userRepository;
            _filmService = filmService;
        }
        public async Task AddRatingByFilmIdAsync(RatingModel model)
        {
            await _filmService.UpdateTotalRatingAsync(model);

            Rating rating = Mapper.Map<RatingModel, Rating>(model);
            rating.User = await _userRepository.GetUserByIdAsync(rating.UserId);
            await _ratingRepository.AddRatingAsync(rating);
        }
    }
}
