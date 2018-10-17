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
        private readonly IMapper _mapper;
        public RatingService(IRatingRepository ratingRepository, IUserRepository userRepository,
            IFilmService filmService, IMapper mapper)
        {
            _ratingRepository = ratingRepository;
            _userRepository = userRepository;
            _filmService = filmService;
            _mapper = mapper;
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
                await _ratingRepository.AddRatingAsync(_mapper.Map<RatingModel, Rating>(model));
            }
            await _filmService.UpdateTotalRatingByFilmIdAsync(model.FilmId);
        }
        public bool CheckFilmIsMarkedByCurrentUser(int id, string userId)
        {
            return _ratingRepository.CheckFilmIsMarkedByCurrentUser(id, userId);
        }
    }
}
