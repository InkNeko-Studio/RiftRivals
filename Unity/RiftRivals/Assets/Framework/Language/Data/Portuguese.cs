using System.Collections.Generic;

namespace Framework.Language.Data
{
    public class Portuguese : ILanguage
    {
        private Dictionary<string, string> words = new Dictionary<string, string>()
        {
            { "login", "Entrar" },
            { "loginfailed", "Falha ao Entrar!" },
            { "register", "Registrar" },
            { "usernamealreadyinuse", "Nome de usuário já está em uso!" },
            { "emailalreadyinuse", "Email já está em uso!" },
            { "registerfailed", "Falha ao Registrar!" },
            { "username", "Nome de Usuário" },
            { "usernameempty", "Nome de usuário não pode estar vazio!" },
            { "usernameshort", "Nome de usuário deve ter no mínimo 3 caracteres!" },
            { "usernamealphanum", "Nome de usuário deve ter somente caracters alfanuméricos!" },
            { "email", "E-Mail" },
            { "emailempty", "E-Mail não pode estar vazio!" },
            { "emailinvalid", "E-Mail inválido!" },
            { "password", "Senha" },
            { "passwordempty", "Senha não pode estar vazia!" },
            { "passwordshort", "Senha deve ter no mínimo 8 caracteres!" },
            { "playmode", "BATALHA" },
            { "teambutton", "EQUIPE" },
            { "pvebutton", "PVE"},
            { "expeditionbutton", "EXPEDICAO" },
            { "pvpbutton", "PvP" },
            { "rankedbutton", "RANQUEADA" },
            { "battlebackbutton", "VOLTAR" },
            { "userbutton", "USUARIO" },
            { "configbutton", "CONFIG" },
            
            #region Gacha
            { "out", "Sair" },
            #endregion
        };

        public string GetString(string code)
        {
            if (words.TryGetValue(code, out var s))
                return s;
            return code;
        }
    }
}