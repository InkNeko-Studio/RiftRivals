using System;
using UnityEngine;

namespace Framework.RiftRivals
{
    public class AuthTokenDto
    {
        public string token;
    }
    
    public class QueueUpdateResponse
    {
        public int queue;
    }
    
    public class MatchFoundResponse
    {
        public string match;
        public int opponent;
    }
    
    public class MatchmakingManager : MonoBehaviour
    {
        public static MatchmakingManager Instance;

        private WebSocketManager _webSocketManager;
        public string url;
        
        public void Awake()
        {
            if (Instance == null)
                Instance = this;
            else
                Destroy(gameObject);
        
            DontDestroyOnLoad(gameObject);
        }

        public void Start()
        {
            _webSocketManager = new WebSocketManager();
            _webSocketManager.Connect(url, () => {});
        }

        public void EnterQueue(Action<int> onMatchFound, Action<int> onQueueUpdate, Action<string> onError)
        {
            _webSocketManager.On("error", (res) => {
                onError(res);
            });
            _webSocketManager.On<QueueUpdateResponse>("on-queue", (res) => {
                onQueueUpdate(res.queue);
            });
            _webSocketManager.On<MatchFoundResponse>("match-found", (res) => {
                onMatchFound(res.opponent);
            });
            AuthTokenDto authTokenDto = new AuthTokenDto()
            {
                token = ConnectionManager.Instance.accessToken
            };
            _webSocketManager.Send("enter", authTokenDto);
            Debug.Log("Matchmaking sent");
        }
    }
}