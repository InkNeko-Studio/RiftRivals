using Framework.RiftRivals;
using Game.Shared.UI.Popup;
using TMPro;
using UnityEngine;
using UnityEngine.SceneManagement;
using UnityEngine.Serialization;

namespace Game.Scenes.Start.Scripts
{
    public class RegisterPanel : MonoBehaviour
    {
        private Popup _popup;
        
        public TMP_InputField inputUsername;
        public TMP_InputField inputEmail;
        public TMP_InputField inputPassword;

        public TextPopup errorPopup;

        private void Start()
        {
            _popup = this.GetComponent<Popup>();
        }

        public void RegisterButton()
        {
            RegisterInfo registerInfo = new RegisterInfo()
            {
                username = inputUsername.text,
                email = inputEmail.text,
                password = inputPassword.text
            };
            AuthManager.Instance.Register(registerInfo, () => {
                _popup.Hide();
            }, err => {
                errorPopup.Show(2);
                errorPopup.SetText(err);
            });
        }
    }
}
