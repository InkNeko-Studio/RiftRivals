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
            { "playmode", "Batalha" },
            { "teambutton", "Equipe" },
            { "pvebutton", "PvE"},
            { "expeditionbutton", "Expedição" },
            { "pvpbutton", "PvP" },
            { "rankedbutton", "Ranqueada" },
            { "battlebackbutton", "Voltar" },
            {"playmode", "Batalha"},
            {"teambutton", "Equipe"},
            {"pvebutton", "PvE"},
            {"expeditionbutton", "Expedição"},
            {"pvpbutton", "PvP"},
            {"rankedbutton", "Ranqueada"},
            {"battlebackbutton", "Voltar"},
            {"userbutton", "Usuario"},
            {"configbutton", "Confi"},
        };

        public string GetString(string code)
        {
            return words[code];
        }
    }
}