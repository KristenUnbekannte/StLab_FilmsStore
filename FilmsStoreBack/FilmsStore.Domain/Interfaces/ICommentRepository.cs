using System.Collections.Generic;
using System.Threading.Tasks;
using FilmsStore.Domain.Entities;

namespace FilmsStore.Domain.Interfaces
{
    public interface ICommentRepository
    {
        Task<IList<Comment>> GetCommentsByFilmIdAsync(int id);
        Task AddCommentAsync(Comment comment);
    }
}
