using TMPro;
using UnityEngine;

namespace Framework.Language
{
    public class LanguageTextField : MonoBehaviour
    {
        public string code;
    
        public TMP_Text _text;

        public void OnEnable()
        {
            _text = GetComponent<TMP_Text>();
            
            LanguageManager.Instance.LanguageChange += () => {
                _text.text = LanguageManager.Instance.Get(code);
            };
            
            _text.text = LanguageManager.Instance.Get(code);
        }

        public void SetText(string newCode)
        {
            code = newCode;
            _text.text = LanguageManager.Instance.Get(code);
        }
    }
}
