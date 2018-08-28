﻿using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using AutoMapper;
using FilmsStore.BusinessLogic.Infrastructure;
using FilmsStore.BusinessLogic.Interfaces;
using FilmsStore.Domain.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.IdentityModel.Tokens;

namespace FilmsStore.BusinessLogic.Services
{
    public class TokenService : ITokenService
    {
        private readonly UserManager<User> _userManager;
        public TokenService(UserManager<User> userManager)
        {
            _userManager = userManager;
        }
        public async Task<string> GetToken(User user)
        {
            var identity = await GetIdentity(user);
            var dateTime = DateTime.UtcNow;
            var jwt = new JwtSecurityToken(
                   issuer: AuthOptions.ISSUER,
                   audience: AuthOptions.AUDIENCE,
                   notBefore: dateTime,
                   claims: identity.Claims,
                   expires: dateTime.Add(TimeSpan.FromDays(AuthOptions.LIFETIME)),
                   signingCredentials: new SigningCredentials(AuthOptions.GetSymmetricSecurityKey(), SecurityAlgorithms.HmacSha256));
            var encodedJwt = new JwtSecurityTokenHandler().WriteToken(jwt);
            return encodedJwt;
        }
        private async Task<ClaimsIdentity> GetIdentity(User user)
        {
            if (user != null)
            {
                IList<string> roles = await _userManager.GetRolesAsync(user);

                var claims = new List<Claim>
                {
                    new Claim(ClaimTypes.NameIdentifier, user.Id),
                    new Claim(ClaimTypes.Name, user.UserName),
                    new Claim(ClaimsIdentity.DefaultRoleClaimType, roles.First())
                };
                ClaimsIdentity claimsIdentity = new ClaimsIdentity(claims, "Token", ClaimsIdentity.DefaultNameClaimType,
                    ClaimsIdentity.DefaultRoleClaimType);
                return claimsIdentity;
            }
            return null;
        }
    }
}
