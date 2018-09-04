using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.AspNetCore.Mvc;
using Serilog;

namespace FilmsStore.WebApi.Filters
{
    public class ExceptionFilter : ExceptionFilterAttribute
    {
        public override Task OnExceptionAsync(ExceptionContext context)
        {
            Log.Information(context.Exception.ToString());
            context.Result = new StatusCodeResult(500);
            context.ExceptionHandled = true;

            return base.OnExceptionAsync(context);
        }
    }
}
