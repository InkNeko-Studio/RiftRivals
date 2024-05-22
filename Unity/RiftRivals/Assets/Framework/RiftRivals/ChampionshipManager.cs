using System;
using UnityEngine;

namespace Framework.RiftRivals
{
    [Serializable]
    public class ChampionshipResponse
    {
        public Battle[] battles;
        public bool win;
        public Reward reward;
    }

    [Serializable]
    public class Reward
    {
        public int fans;
        public int coins;
        public int tickets;
    }

    [Serializable]
    public class Battle
    {
        public bool top;
        public bool jungle;
        public bool bot;
        public bool win;
    }
    
    public class ChampionshipManager : MonoBehaviour
    {
        public static ChampionshipManager Instance;
        
        public void Awake()
        {
            if (Instance == null)
                Instance = this;
            else
                Destroy(gameObject);
            
            DontDestroyOnLoad(gameObject);
        }
        
        public void JoinChampionship(Action<ChampionshipResponse> onSuccess, Action<string> onError)
        {
            ConnectionManager.Instance.Get(Routes.ChampionshipJoin, data => {
                ChampionshipResponse result = JsonUtility.FromJson<ChampionshipResponse>(data);
                onSuccess(result);
            }, err => {
                onError(err.message);
            });
        }
    }
}
