using System.Collections.Generic;

namespace Framework.Language.Data
{
    public class English : ILanguage
    {
        private Dictionary<string, string> words = new Dictionary<string, string>()
        {
            #region Login
            { "login", "Login" },
            { "loginfailed", "Login Failed!" },
            { "register", "Register" },
            { "usernamealreadyinuse", "Username is already in use!" },
            { "emailalreadyinuse", "Email is already in use!" },
            { "registerfailed", "Register Failed!" },
            { "username", "Username" },
            { "usernameempty", "Username should not be empty!" },
            { "usernameshort", "Username must have at least 3 characters!" },
            { "usernamealphanum", "Username does not allow other than alpha numeric characters!" },
            { "email", "E-Mail" },
            { "emailempty", "E-Mail should not be empty!" },
            { "emailinvalid", "Invalid E-Mail!" },
            { "password", "Password" },
            { "passwordempty", "Password should not be empty!" },
            { "passwordshort", "Password must have at least 8 characters!" },
            #endregion
            #region Menu
            { "playmode", "Battle" },
            { "teambutton", "Team" },
            { "pvebutton", "PvE" },
            { "expeditionbutton", "Expedition" },
            { "pvpbutton", "PvP" },
            { "rankedbutton", "Ranked" },
            { "battlebackbutton", "Back" },
            { "userbutton", "User" },
            { "configbutton", "Config" },
            #endregion

            #region Gacha
            { "out", "Leave" },
            

            #endregion
            
            
            
        };

        public string GetString(string code)
        {
            return words[code];
        }
    }
}