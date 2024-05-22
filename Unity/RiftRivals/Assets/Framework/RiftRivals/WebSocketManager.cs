using System;
using System.Collections.Generic;
using SocketIOClient;
using UnityEngine;

namespace Framework.RiftRivals
{
    public class WebSocketManager
    {
        private SocketIOUnity _socket;
        private string _url;

        ~WebSocketManager()
        {
            Close();
        }

        public async void Connect(string url, Action callback = null)
        {
            _url = url;
            var uri = new Uri(url);
            _socket = new SocketIOUnity(uri, new SocketIOOptions {
                Transport = SocketIOClient.Transport.TransportProtocol.WebSocket
            });
            await _socket.ConnectAsync();
            if (callback != null) callback();
        }
        
        public void Reconnect()
        {
            Close();
            Connect(_url);
        }

        public void Close()
        {
            _socket.Disconnect();
        }
        
        public void Send(string route, object data)
        {
            _socket.EmitStringAsJSON(route, JsonUtility.ToJson(data));
        }

        public void On<T>(string route, Action<T> callback = null)
        {
            _socket.On(route, (response) => {
                var resText = response.ToString();
                resText = resText.Substring(1, resText.Length - 2);
                var obj = JsonUtility.FromJson<T>(resText);
                if (callback != null) callback(obj);
            });
        }

        public void On(string route, Action<string> callback = null)
        {
            _socket.On(route, (response) => {
                var resText = response.ToString();
                if (callback != null) callback(resText);
            });
        }
    }
}
