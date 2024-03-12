using UnityEngine;

namespace Framework.RiftRivals
{
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
    }
}