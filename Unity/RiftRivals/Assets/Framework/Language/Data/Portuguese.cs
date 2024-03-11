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
            {"playmode", "Batalha"},
            {"teambutton", "Equipe"},
            {"pvebutton", "PvE"},
            {"expeditionbutton", "Expedição"},
            {"pvpbutton", "PvP"},
            {"rankedbutton", "Ranqueada"},
            {"battlebackbutton", "Voltar"},
        };

        public string GetString(string code)
        {
            return words[code];
        }
    }
}