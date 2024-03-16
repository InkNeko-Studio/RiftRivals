using Framework.RiftRivals;
using TMPro;
using UnityEngine;

namespace Game.Scenes.MainMenu.Scripts
{
    public class FriendRequestPanel : MonoBehaviour
    {
        public TMP_Text textDisplayName;
        public RequestsPanel requestsPanel;
        
        public int friendsId;

        public void SetData(FriendRequest friendRequest, RequestsPanel parent)
        {
            requestsPanel = parent;
            friendsId = friendRequest.id;
            textDisplayName.text = friendRequest.sender.displayName;
        }

        public void Accept()
        {
            AcceptFriendRequestInfo acceptFriendRequestInfo = new AcceptFriendRequestInfo();
            acceptFriendRequestInfo.friendsId = friendsId;
            FriendsManager.Instance.AcceptFriendRequest(acceptFriendRequestInfo, () => {
                requestsPanel.UpdateList();
            }, err => {
                Debug.Log(err);
            });
        }
    }
}
