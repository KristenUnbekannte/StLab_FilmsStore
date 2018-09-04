using System.Collections.Generic;

namespace FilmsStore.WebApi.Models
{
    public class FilmListViewModel
    {
        public IList<FilmViewModel> Films { get; set; }
        public int TotalCount { get; set; }
    }
}
