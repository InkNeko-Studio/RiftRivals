using Framework.RiftRivals;
using TMPro;
using UnityEngine;

namespace Game.Scenes.MainMenu.Scripts
{
    public class FriendPanel : MonoBehaviour
    {
        public TMP_Text textDisplayName;
        
        public int friendId;

        public void SetData(Profile friend)
        {
            friendId = friend.id;

            textDisplayName.text = friend.displayName;
        }
    }
}
