using System.Collections.Generic;
using System.Threading.Tasks;
using FilmsStore.BusinessLogic.Models;

namespace FilmsStore.BusinessLogic.Interfaces
{
    public interface ICommentService
    {
        Task<CommentModel> AddCommentAsync(CommentModel model);
        Task<IList<CommentModel>> GetCommentsByFilmIdAsync(int id);
    }
}
