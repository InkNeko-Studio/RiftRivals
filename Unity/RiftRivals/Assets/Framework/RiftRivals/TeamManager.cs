using System;
using UnityEngine;

namespace Framework.RiftRivals
{
    [Serializable]
    public class Team
    {
        public int id;
        public string teamName;
    }

    public class TeamManager : MonoBehaviour
    {
        public static TeamManager Instance;
        
        public void Awake()
        {
            if (Instance == null)
                Instance = this;
            else
                Destroy(gameObject);
            
            DontDestroyOnLoad(gameObject);
        }

        public void GetTeam(Action<Team> onSuccess, Action<string> onError)
        {
            ConnectionManager.Instance.Get(Routes.Team, res => {
                Team team = JsonUtility.FromJson<Team>(res);
                onSuccess(team);
            }, err => {
                onError(err.message);
            });
        }
    }
}