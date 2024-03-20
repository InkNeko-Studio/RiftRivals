using Framework.RiftRivals;
using UnityEngine;

namespace Game.Scenes.MainMenu.Scripts.UserScript
{
    public class FriendsPanel : MonoBehaviour
    {
        public GameObject friendPrefab;
        public Transform list;

        public void OnEnable()
        {
            for (int i = 0; i < list.childCount; i++)
            {
                Destroy(list.GetChild(i).gameObject);
            }
            
            FriendsManager.Instance.GetFriends(friendsResponse => {
                foreach (var friend in friendsResponse.friends)
                {
                    GameObject friendObj = Instantiate(friendPrefab, list);
                    friendObj.GetComponent<FriendPanel>().SetData(friend);
                }
            }, err => {
                Debug.Log(err);
            });
        }
    }
}
