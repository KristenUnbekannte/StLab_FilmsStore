using System;

namespace FilmsStore.BusinessLogic.Exceptions
{
    public class FilmNotExistException : Exception
    {
        public FilmNotExistException(string message) : base(message)
        { }
    }
}
