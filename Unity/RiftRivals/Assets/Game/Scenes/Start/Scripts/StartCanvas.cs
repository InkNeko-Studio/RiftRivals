using UnityEngine;

namespace Game.Scenes.Start.Scripts
{
    public class StartCanvas : MonoBehaviour
    {
        public GameObject loginPanel;
        
        public void OpenLoginPanel()
        {
            loginPanel.SetActive(true);
        }
    }
}
