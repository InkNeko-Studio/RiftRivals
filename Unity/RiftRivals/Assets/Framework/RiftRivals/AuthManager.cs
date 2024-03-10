using System;
using UnityEngine;

namespace Framework.RiftRivals
{
    [Serializable]
    public class LoginInfo
    {
        public string username;
        public string password;
    }
    
    [Serializable]
    public class LoginResponse
    {
        public string accessToken;
    }
    
    [Serializable]
    public class RegisterInfo
    {
        public string username;
        public string email;
        public string password;
    }
    
    public class AuthManager : MonoBehaviour
    {
        public static AuthManager Instance;
        
        public void Awake()
        {
            if (Instance == null)
                Instance = this;
            else
                Destroy(gameObject);
            
            DontDestroyOnLoad(gameObject);
        }
        
        public string url;
        public string token;

        private RestUtility _restUtility;

        public void Start()
        {
            _restUtility = new RestUtility(url, null);
        }

        public void Login(LoginInfo loginInfo, Action onSuccess, Action<string> onError)
        {
            string data = JsonUtility.ToJson(loginInfo);
            StartCoroutine(_restUtility.Post("login", data, data => {
                LoginResponse loginResponse = JsonUtility.FromJson<LoginResponse>(data);
                token = loginResponse.accessToken;
                onSuccess();
            }, exception => {
                onError(exception.message);
            }));
        }
        
        public void Register(RegisterInfo registerInfo, Action onSuccess, Action<string> onError)
        {
            string data = JsonUtility.ToJson(registerInfo);
            StartCoroutine(_restUtility.Post("login", data, data => { 
                onSuccess();
            }, exception => {
                onError(exception.message);
            }));
        }
    }
}
