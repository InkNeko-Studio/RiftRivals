using System;
using System.Collections;
using UnityEngine;
using UnityEngine.Networking;
using UnityEngine.SceneManagement;
using UnityEngine.Serialization;

namespace Framework.RiftRivals
{
    public class ConnectionManager : MonoBehaviour
    {
        public static ConnectionManager Instance;
        
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
        
        [Serializable]
        public struct RestException
        {
            public string message;
            public string error;
            public int statusCode;
        }
        
        [Serializable]
        public struct RestExceptionMessages
        {
            public string[] message;
            public string error;
            public int statusCode;
        }

        public void Get(string route, Action<string> onData, Action<RestException> onError)
        {
            StartCoroutine(GetCoroutine(route, onData, err => {
                if (err.statusCode == 401)
                    SceneManager.LoadScene("Start");
                onError(err);
            }));
        }
        
        private IEnumerator GetCoroutine(string route, Action<string> onData, Action<RestException> onError)
        {
            UnityWebRequest request = UnityWebRequest.Get(url + route);
            request.SetRequestHeader("Authorization", "Bearer " + token);
            yield return request.SendWebRequest();

            if (request.result != UnityWebRequest.Result.Success)
            {
                RestException restException = JsonUtility.FromJson<RestException>(request.downloadHandler.text);
                if (string.IsNullOrEmpty(restException.message))
                {
                    RestExceptionMessages restExceptionMessages = JsonUtility.FromJson<RestExceptionMessages>(request.downloadHandler.text);
                    restException.message = restExceptionMessages.message[0];
                }
                onError(restException);
            }
            else
                onData(request.downloadHandler.text);
        }

        public void Post(string route, string data, Action<string> onData, Action<RestException> onError)
        {
            StartCoroutine(PostCoroutine(route, data, onData, onError));
        }
        
        private IEnumerator PostCoroutine(string route, string data, Action<string> onData, Action<RestException> onError)
        {
            UnityWebRequest request = UnityWebRequest.Post(url + route, data, "application/json");
            request.SetRequestHeader("Authorization", "Bearer " + token);
            yield return request.SendWebRequest();

            if (request.result != UnityWebRequest.Result.Success)
            {
                RestException restException = JsonUtility.FromJson<RestException>(request.downloadHandler.text);
                if (string.IsNullOrEmpty(restException.message))
                {
                    RestExceptionMessages restExceptionMessages = JsonUtility.FromJson<RestExceptionMessages>(request.downloadHandler.text);
                    restException.message = restExceptionMessages.message[0];
                }
                onError(restException);
            }
            else
                onData(request.downloadHandler.text);
        }
    }
}
