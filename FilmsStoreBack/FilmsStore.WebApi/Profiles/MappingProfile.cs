using FilmsStore.BusinessLogic.Models;
using FilmsStore.WebApi.Models;

namespace FilmsStore.WebApi.Profiles
{
    public class MappingProfile : AutoMapper.Profile
    {
        public MappingProfile()
        {
            CreateMap<RegistrationViewModel, UserModel>();
            CreateMap<LoginViewModel, UserModel>();
            CreateMap<RatingViewModel, RatingModel>();
            CreateMap<CommentViewModel, CommentModel>();
            CreateMap<FilmModel, FilmViewModel>();
        }
    }
}
