using UnityEngine;
using UnityEngine.SceneManagement;

namespace Game.Scenes.Load.Scripts
{
    public class AutoLoad : MonoBehaviour
    {
        private void Start()
        {
            SceneManager.LoadScene("Start");
        }
    }
}
