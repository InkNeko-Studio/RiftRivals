using System;
using System.Collections.Generic;
using UnityEngine;

namespace Framework.RiftRivals
{
    [Serializable]
    public class FriendRequest
    {
        public int id;
        public Profile sender;
        public Profile receiver;
        public bool accepted;
    }
    
    [Serializable]
    public class FriendRequestsResponse
    {
        public FriendRequest[] friendRequests;
    }
    
    [Serializable]
    public class FriendsResponse
    {
        public Profile[] friends;
    }
    
    [Serializable]
    public class SendFriendRequestInfo
    {
        public int profileId;
    }
    
    [Serializable]
    public class AcceptFriendRequestInfo
    {
        public int friendsId;
    }
    
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

        public void GetFriends(Action<FriendsResponse> onSuccess, Action<string> onError)
        {
            ConnectionManager.Instance.Get(Routes.Friends, data => {
                FriendsResponse friends = JsonUtility.FromJson<FriendsResponse>(data);
                onSuccess(friends);
            }, err => {
                onError(err.message);
            });
        }

        public void GetFriendRequests(Action<FriendRequestsResponse> onSuccess, Action<string> onError)
        {
            ConnectionManager.Instance.Get(Routes.FriendRequests, data => {
                FriendRequestsResponse friends = JsonUtility.FromJson<FriendRequestsResponse>(data);
                onSuccess(friends);
            }, err => {
                onError(err.message);
            });
        }
        
        public void SendFriendRequest(SendFriendRequestInfo sendFriendRequestInfo, Action onSuccess, Action<string> onError)
        {
            string data = JsonUtility.ToJson(sendFriendRequestInfo); 
            
            ConnectionManager.Instance.Post(Routes.SendFriendRequest, data, res => {
                onSuccess();
            }, err => {
                onError(err.message);
            });
        }
        
        public void AcceptFriendRequest(AcceptFriendRequestInfo acceptFriendRequestInfo, Action onSuccess, Action<string> onError)
        {
            string data = JsonUtility.ToJson(acceptFriendRequestInfo); 
            
            ConnectionManager.Instance.Post(Routes.AcceptFriendRequest, data, res => {
                onSuccess();
            }, err => {
                onError(err.message);
            });
        }
    }
}
