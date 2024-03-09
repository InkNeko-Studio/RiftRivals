using System.Collections.Generic;

namespace Framework.Language.Data
{
    public class English : ILanguage
    {
        private Dictionary<string, string> words = new Dictionary<string, string>()
        {
            { "login", "Login" },
            { "username", "Username" },
            { "password", "Password" },
        };

        public string GetString(string code)
        {
            return words[code];
        }
    }
}