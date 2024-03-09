using System.Collections.Generic;

namespace Framework.Language.Data
{
    public class Portuguese : ILanguage
    {
        private Dictionary<string, string> words = new Dictionary<string, string>()
        {
            { "login", "Entrar" },
            { "username", "Nome de Usuário" },
            { "password", "Senha" },
        };

        public string GetString(string code)
        {
            return words[code];
        }
    }
}