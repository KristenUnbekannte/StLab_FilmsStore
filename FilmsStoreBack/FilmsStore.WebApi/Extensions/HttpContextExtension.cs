using System.Linq;
using System.Security.Claims;
using Microsoft.AspNetCore.Http;

namespace FilmsStore.WebApi.Extensions
{
    public static class HttpContextExtension
    {
        public static string GetUserIdAsync(this HttpContext context)
        {
            return context.User.Claims.Where(claim => claim.Type == ClaimTypes.NameIdentifier).FirstOrDefault().Value;
        }
    }
}
