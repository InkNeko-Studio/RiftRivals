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
            ConnectionManager.Get()
        }
    }
}
