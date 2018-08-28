using FilmsStore.BusinessLogic.Models;
using FilmsStore.Domain.Entities;

namespace FilmsStore.BusinessLogic.Profiles
{
    class MappingProfile : AutoMapper.Profile
    {
        public MappingProfile()
        {
            CreateMap<FilmModel, Film>();
            CreateMap<UserModel, User>();
            CreateMap<RatingModel, Rating>();
            CreateMap<FilmDetailsModel, Film>();
            CreateMap<CommentModel, Comment>();
            CreateMap<Comment, CommentModel>().ForMember(c => c.UserName, c => c.MapFrom(m => m.User.UserName));
        }
    }
}
