using System;

namespace FilmsStore.BusinessLogic.Exceptions
{
    public class ImageNotExistException : Exception
    {
        public ImageNotExistException(string message) : base(message)
        { }
    }
}
