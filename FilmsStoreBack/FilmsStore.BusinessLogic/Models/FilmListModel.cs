using System.Collections.Generic;

namespace FilmsStore.BusinessLogic.Models
{
    public class FilmListModel
    {
        public IList<FilmModel> Films { get; set; }
        public int TotalCount { get; set; }
    }
}
