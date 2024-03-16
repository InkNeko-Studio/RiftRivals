using Framework.RiftRivals;
using Game.Shared.UI.Popup;
using TMPro;
using UnityEngine;

namespace Game.Scenes.MainMenu.Scripts.UserScript
{
    public class AddFriendPanel : MonoBehaviour
    {
        public TMP_InputField inputFriendId;
        public TextPopup textPopup;
        
        public void SendFriendRequest()
        {
            SendFriendRequestInfo sendFriendRequestInfo = new SendFriendRequestInfo();
            sendFriendRequestInfo.profileId = int.Parse(inputFriendId.text);
            FriendsManager.Instance.SendFriendRequest(sendFriendRequestInfo, () => {
                textPopup.Show(2);
                textPopup.SetText("requestsent");
            }, err => {
                textPopup.Show(2);
                textPopup.SetText(err);
            });
        }
    }
}
