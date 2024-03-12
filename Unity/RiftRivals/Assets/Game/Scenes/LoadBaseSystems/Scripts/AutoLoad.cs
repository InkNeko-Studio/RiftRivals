using UnityEngine;
using UnityEngine.SceneManagement;

namespace Game.Scenes.LoadBaseSystems.Scripts
{
    public class AutoLoad : MonoBehaviour
    {
        private void Start()
        {
            SceneManager.LoadScene("Start");
        }
    }
}
