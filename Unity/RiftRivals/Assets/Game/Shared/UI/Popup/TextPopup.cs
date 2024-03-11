using Framework.Language;
using UnityEngine;

namespace Game.Shared.UI.Popup
{
    public class TextPopup : Popup
    {
        public LanguageTextField textError;

        public void SetText(string text)
        {
            textError.SetText(text);
        }
    }
}
