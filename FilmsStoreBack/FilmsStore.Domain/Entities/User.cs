using System.Collections.Generic;
using Microsoft.AspNetCore.Identity;

namespace FilmsStore.Domain.Entities
{
    public class User : IdentityUser
    {
        public ICollection<Rating> Ratings { get; set; }
        public ICollection<Comment> Comments { get; set; }
    }
}
