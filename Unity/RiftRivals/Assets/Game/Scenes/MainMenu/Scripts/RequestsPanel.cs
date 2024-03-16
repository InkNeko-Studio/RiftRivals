using System;
using Framework.RiftRivals;
using UnityEngine;

namespace Game.Scenes.MainMenu.Scripts
{
    public class RequestsPanel : MonoBehaviour
    {
        public GameObject requestPrefab;
        public Transform list;

        public void OnEnable()
        {
            UpdateList();
        }

        public void UpdateList()
        {
            for (int i = 0; i < list.childCount; i++)
            {
                Destroy(list.GetChild(i).gameObject);
            }
            
            FriendsManager.Instance.GetFriendRequests(friendRequestsResponse => {
                foreach (var friendRequest in friendRequestsResponse.friendRequests)
                {
                    GameObject request = Instantiate(requestPrefab, list);
                    request.GetComponent<FriendRequestPanel>().SetData(friendRequest, this);
                }
            }, err => {
                Debug.Log(err);
            });
        }
    }
}
