using System;

namespace FilmsStore.BusinessLogic.Exceptions
{
    public class ImageNotExistException : NotExistException
    {
        public ImageNotExistException(string message) : base(message)
        { }
    }
}
