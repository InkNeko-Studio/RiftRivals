using System;
using System.Collections;
using UnityEngine;
using UnityEngine.Networking;

namespace Framework.RiftRivals
{
    public class RestUtility
    {
        public string URL;
        public string Token;
        
        [Serializable]
        public struct RestException
        {
            public string message;
            public string error;
            public int statusCode;
        }
        
        public RestUtility(string url = "", string token = "")
        {
            URL = url;
            Token = token;
        }
        
        private IEnumerator GetCoroutine(string route, Action<string> onData, Action<RestException> onError)
        {
            UnityWebRequest request = UnityWebRequest.Get(URL + route);
            request.SetRequestHeader("Authorization", "Bearer " + Token);
            yield return request.SendWebRequest();
            
            if (request.result != UnityWebRequest.Result.Success)
                onError(JsonUtility.FromJson<RestException>(request.downloadHandler.text));
            else
                onData(request.downloadHandler.text);
        }
        
        public IEnumerator Post(string route, string data, Action<string> onData, Action<RestException> onError)
        {
            UnityWebRequest request = UnityWebRequest.Post(URL + route, data, "application/json");
            request.SetRequestHeader("Authorization", "Bearer " + Token);
            yield return request.SendWebRequest();
            
            if (request.result != UnityWebRequest.Result.Success)
                onError(JsonUtility.FromJson<RestException>(request.downloadHandler.text));
            else
                onData(request.downloadHandler.text);
        }
    }
}
