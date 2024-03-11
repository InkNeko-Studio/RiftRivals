using Framework.RiftRivals;
using Game.Shared.UI.Popup;
using TMPro;
using UnityEngine;
using UnityEngine.SceneManagement;
using UnityEngine.Serialization;

namespace Game.Scenes.Start.Scripts
{
    public class LoginPanel : MonoBehaviour
    {
        public TMP_InputField inputUsername;
        public TMP_InputField inputPassword;

        public Popup errorPopup;
        
        public void LoginButton()
        {
            LoginInfo loginInfo = new LoginInfo()
            {
                username = inputUsername.text,
                password = inputPassword.text
            };
            AuthManager.Instance.Login(loginInfo, () => {
                SceneManager.LoadScene("MainMenu");
            }, err => {
                errorPopup.Show(2);
            });
        }
    }
}
