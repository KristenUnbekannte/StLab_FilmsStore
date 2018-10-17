using System;
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
            CreateMap<ImageViewModel, ImageModel>();
            CreateMap<FilmModel, FilmViewModel>()
                .ForMember(f => f.Rating, f => f.MapFrom(r => Math.Round(r.Rating, 1)));
            CreateMap<FilmDetailsModel, FilmDetailsViewModel>()
                .ForMember(f => f.Rating, f => f.MapFrom(r => Math.Round(r.Rating, 1)));
        }
    }
}
