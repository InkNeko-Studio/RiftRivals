using System;
using System.Collections.Generic;
using UnityEngine;

namespace Framework.RiftRivals
{
    public class FriendsManager : MonoBehaviour
    {
        public static FriendsManager Instance;
        
        public void Awake()
        {
            if (Instance == null)
                Instance = this;
            else
                Destroy(gameObject);
            
            DontDestroyOnLoad(gameObject);
        }

        public void GetFriends(List<Profile> friends)
        {
            ConnectionManager.Instance.Get(Routes.Friends, data => {
                friends = JsonUtility.FromJson<List<Profile>>(data);
            }, err => {
                Debug.Log("failed getting friends");
            });
        }
    }
}
