using System;
using UnityEngine;

namespace Framework.RiftRivals
{
    [Serializable]
    public class Profile
    {
        public int id;
        public string displayName;
        public int pictureId;
    }
    
    [Serializable]
    public class FindProfileInfo
    {
        public int profileId;
    }

    public class ProfileManager : MonoBehaviour
    {
        public static ProfileManager Instance;
        
        public void Awake()
        {
            if (Instance == null)
                Instance = this;
            else
                Destroy(gameObject);
            
            DontDestroyOnLoad(gameObject);
        }

        public void GetProfile(Action<Profile> onSuccess, Action<string> onError)
        {
            ConnectionManager.Instance.Get(Routes.Profile, res => {
                Profile profile = JsonUtility.FromJson<Profile>(res);
                onSuccess(profile);
            }, err => {
                onError(err.message);
            });
        }
        
        public void FindProfile(FindProfileInfo findProfileInfo, Action<Profile> onSuccess, Action<string> onError)
        {
            string data = JsonUtility.ToJson(findProfileInfo);
            ConnectionManager.Instance.Post(Routes.Profile, data, res => {
                Profile profile = JsonUtility.FromJson<Profile>(res);
                onSuccess(profile);
            }, err => {
                onError(err.message);
            });
        }
    }
}