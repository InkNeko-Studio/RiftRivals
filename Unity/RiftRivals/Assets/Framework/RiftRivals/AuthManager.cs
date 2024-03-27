using System;
using UnityEngine;
using UnityEngine.SceneManagement;

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
        public string refreshToken;
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

        public void Login(LoginInfo loginInfo, Action onSuccess, Action<string> onError)
        {
            string data = JsonUtility.ToJson(loginInfo);
            ConnectionManager.Instance.Post(Routes.AuthLogin, data, res => {
                LoginResponse loginResponse = JsonUtility.FromJson<LoginResponse>(res);
                
                ConnectionManager.Instance.accessToken = loginResponse.accessToken;
                ConnectionManager.Instance.refreshToken = loginResponse.refreshToken;
                
                PlayerPrefs.SetString("refreshToken", loginResponse.refreshToken);
                onSuccess();
            }, exception => {
                onError(exception.message);
            });
        }

        public void Logout()
        {
            ConnectionManager.Instance.accessToken = "";
            ConnectionManager.Instance.refreshToken = "";
            PlayerPrefs.SetString("refreshToken", "");
            SceneManager.LoadScene("Start");
        }

        public void Reauthenticate(Action onSuccess, Action<string> onError)
        {
            ConnectionManager.Instance.Get(Routes.AuthRefresh, res => {
                LoginResponse loginResponse = JsonUtility.FromJson<LoginResponse>(res);
                
                ConnectionManager.Instance.accessToken = loginResponse.accessToken;
                ConnectionManager.Instance.refreshToken = loginResponse.refreshToken;
                
                PlayerPrefs.SetString("refreshToken", loginResponse.refreshToken);
                onSuccess();
            }, exception => {
                onError(exception.message);
            });
        }
        
        public void Register(RegisterInfo registerInfo, Action onSuccess, Action<string> onError)
        {
            string data = JsonUtility.ToJson(registerInfo);
            ConnectionManager.Instance.Post(Routes.AuthRegister, data, res => { 
                onSuccess();
            }, exception => {
                onError(exception.message);
            });
        }
    }
}
