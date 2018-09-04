using System;
using System.Collections.Generic;
using System.Text;

namespace FilmsStore.BusinessLogic.Exceptions
{
    public class NotExistException : Exception 
    {
        public NotExistException(string message) : base(message)
        { }
    }
}
