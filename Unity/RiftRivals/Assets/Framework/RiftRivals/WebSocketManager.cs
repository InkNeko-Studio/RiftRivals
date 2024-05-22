using System;
using System.Collections.Generic;
using SocketIOClient;
using UnityEngine;

namespace Framework.RiftRivals
{
    public class WebSocketManager
    {
        private SocketIOUnity _socket;

        public async void Connect(string url, Action callback = null)
        {
            var uri = new Uri("https://www.example.com");
            _socket = new SocketIOUnity(uri, new SocketIOOptions {
                Transport = SocketIOClient.Transport.TransportProtocol.WebSocket
            });
            await _socket.ConnectAsync();
            callback();
        }
        
        public void Send(string route, object data)
        {
            _socket.Emit(route, data);
        }
        
        public void Send<T>(string route, object data, Action<T> callback = null)
        {
            _socket.Emit(route, (response) =>
            {
                var obj = response.GetValue<T>();
                callback(obj);
            }, data);
        }

        public void On<T>(string route, Action<T> callback = null)
        {
            _socket.On(route, (response) =>
            {
                var obj = response.GetValue<T>();
                callback(obj);
            });
        }

        public void On(string route, Action<string> callback = null)
        {
            _socket.On(route, (response) =>
            {
                var obj = response.GetValue<string>();
                callback(obj);
            });
        }
    }
}
