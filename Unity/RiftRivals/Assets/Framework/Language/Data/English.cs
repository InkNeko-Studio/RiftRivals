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
            {"playmode", "Battle"},
            {"teambutton", "Team"},
            {"pvebutton", "PvE"},
            {"expeditionbutton", "Expedition"},
            {"pvpbutton", "PvP"},
            {"rankedbutton", "Ranked"},
            {"battlebackbutton", "Back"},
            {"userbutton", "User"},
            {"configbutton", "Config"},
        };

        public string GetString(string code)
        {
            return words[code];
        }
    }
}