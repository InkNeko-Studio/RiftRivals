using System.Collections;
using System.Collections.Generic;
using UnityEngine;

namespace Game.Shared.UI.Popup
{
    public class Popup : MonoBehaviour
    {
        public bool check; //false se o objeto não estiver ativo no começo da cena
        public void Show()
        {
            gameObject.SetActive(true);
        }
        public void Showandhide()
                {
                    if (check == true)
                    {
                        gameObject.SetActive(true);
                        check = false;
                    }
                    else
                    {
                        gameObject.SetActive(false);
                        check = true;
                    }

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
