using System;

namespace FilmsStore.BusinessLogic.Exceptions
{
    public class FilmNotExistException : NotExistException
    {
        public FilmNotExistException(string message) : base(message)
        { }
    }
}
