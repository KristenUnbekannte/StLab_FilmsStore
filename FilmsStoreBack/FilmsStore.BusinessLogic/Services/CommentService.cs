using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using FilmsStore.BusinessLogic.Interfaces;
using FilmsStore.BusinessLogic.Models;
using FilmsStore.Domain.Entities;
using FilmsStore.Domain.Interfaces;

namespace FilmsStore.BusinessLogic.Services
{
    public class CommentService : ICommentService
    {
        private readonly ICommentRepository _commentRepository;
        private readonly IUserRepository _userRepository;
        private readonly IMapper _mapper;
        public CommentService(ICommentRepository commentRepository,
            IUserRepository userRepository, IMapper mapper)
        {
            _commentRepository = commentRepository;
            _userRepository = userRepository;
            _mapper = mapper;
        }
        public async Task AddCommentAsync(CommentModel model)
        {
            Comment comment = _mapper.Map<CommentModel, Comment>(model);
            comment.Date = $"{ DateTime.Now.ToShortDateString()} {DateTime.Now.ToShortTimeString()}";
            comment.User = await _userRepository.GetUserByIdAsync(comment.UserId);

            await _commentRepository.AddCommentAsync(comment);
        }
        public async Task<IList<CommentModel>> GetCommentsByFilmIdAsync(int id)
        {
            IList<Comment> comments = await _commentRepository.GetCommentsByFilmIdAsync(id);
            return _mapper.Map<IList<Comment>, IList<CommentModel>>(comments);
        }
    }
}
