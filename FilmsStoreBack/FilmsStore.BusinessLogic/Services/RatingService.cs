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
            Rating rating = await _ratingRepository.GetRatingByFilmIdandUserIdAsync(model.FilmId, model.UserId);
            if (rating != null)
            {
                rating.Value = model.Value;
                await _ratingRepository.UpdateRatingAsync(rating);
            }
            else
            {
                model.User = await _userRepository.GetUserByIdAsync(model.UserId);
                await _ratingRepository.AddRatingAsync(Mapper.Map<RatingModel, Rating>(model));
            }
            await _filmService.UpdateTotalRatingByFilmIdAsync(model.FilmId);
        }
        public bool CheckFilmIsMarkedByCurrentUser(int id, string userId)
        {
            return _ratingRepository.CheckFilmIsMarkedByCurrentUser(id, userId);
        }
    }
}
