using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using FilmsStore.BusinessLogic.Interfaces;
using FilmsStore.BusinessLogic.Models;
using FilmsStore.WebApi.Controllers;
using FilmsStore.WebApi.Extensions;
using FilmsStore.WebApi.Models;
using FilmsStore.WebApi.Profiles;
using FilmsStore.WebApi.SignalR;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using Moq;
using Xunit;

namespace FilmsStore.UnitTests.Controllers
{
    public class CommentControllerTest
    {
        private Mock<ICommentService> commentService;
        private Mock<IHubContext<CommentHub>> hubContext;
        private Mock<HttpContext> context;
        private IMapper mapper;

        public CommentControllerTest()
        {
            commentService = new Mock<ICommentService>();
            hubContext = new Mock<IHubContext<CommentHub>>();
            context = new Mock<HttpContext>();
            var config = new MapperConfiguration(cfg =>
            {
                cfg.AddProfile(new MappingProfile());
            });
            mapper = config.CreateMapper();
        }

        private IList<CommentModel> commentsList = new List<CommentModel>()
        {
            new CommentModel {
                    FilmId = 1,
                    Message = "hello"
                },
            new CommentModel {
                    FilmId = 1,
                    Message = "hi"
                }
        };

        [Fact]
        public async Task TestGetComments_GetValidId_ReturnCommentsSuccessfully()
        {
            // Arrange
            int filmId = 1;

            commentService.Setup(comment => comment.GetCommentsByFilmIdAsync(filmId)).ReturnsAsync(commentsList);
            CommentController controller = new CommentController(commentService.Object, mapper, hubContext.Object);

            // Act
            var result = await controller.GetComments(filmId);

            // Assert
            var okResult = result.Result as OkObjectResult;
            Assert.NotNull(okResult);

            var comments = okResult.Value as IEnumerable<CommentViewModel>;
            Assert.NotNull(comments);
            Assert.Equal(commentsList.Count, comments.Count());
            Assert.Equal("hello", comments.FirstOrDefault().Message);

            commentService.Verify(c => c.GetCommentsByFilmIdAsync(filmId), Times.Once);
        }
    }
}
