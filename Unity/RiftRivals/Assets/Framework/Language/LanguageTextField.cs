using TMPro;
using UnityEngine;

namespace Framework.Language
{
    public class LanguageTextField : MonoBehaviour
    {
        public string code;
    
        private TMP_Text _text;

        public void Start()
        {
            _text = GetComponent<TMP_Text>();
            
            LanguageManager.Instance.LanguageChange += () => {
                _text.text = LanguageManager.Instance.Get(code);
            };
            
            _text.text = LanguageManager.Instance.Get(code);
        }
    }
}
