using System.Collections;
using System.Collections.Generic;
using UnityEngine;

namespace Game.Shared.UI.Popup
{
    public class Popup : MonoBehaviour
    {
        public void Show()
        {
            gameObject.SetActive(true);
        }

        public void Hide()
        {
            gameObject.SetActive(false);
        }

        public void Show(int seconds)
        {
            Show();
            Invoke(nameof(Hide), seconds);
        }
    }
}
