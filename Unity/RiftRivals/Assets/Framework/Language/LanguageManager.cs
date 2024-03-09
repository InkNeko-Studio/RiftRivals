using System;
using Framework.Language.Data;
using UnityEngine;

namespace Framework.Language
{
    public enum Language
    {
        English = 0,
        Portuguese = 1,
    }
    
    public class LanguageManager : MonoBehaviour
    {
        public static LanguageManager Instance;
        
        public void Awake()
        {
            if (Instance == null)
                Instance = this;
            else
                Destroy(gameObject);
            
            DontDestroyOnLoad(gameObject);
        }

        public Language language;
        
        private ILanguage _language;

        public delegate void LanguageChangeDelegate();
        public event LanguageChangeDelegate LanguageChange = () => {};
        
        private void Start()
        {
            SetLanguage(language);
        }

        public string Get(string code)
        {
            return _language.GetString(code);
        }

        public void SetLanguage(Language newLanguage)
        {
            language = newLanguage;
            
            switch (language)
            {
                case Language.English:
                    _language = new English();
                    break;
                case Language.Portuguese:
                    _language = new Portuguese();
                    break;
            }

            LanguageChange();
        }
    }
}
