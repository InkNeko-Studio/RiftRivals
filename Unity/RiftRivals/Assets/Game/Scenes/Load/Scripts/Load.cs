using UnityEngine;
using UnityEngine.SceneManagement;

namespace Game.Scenes.Load.Scripts
{
    public class Load : MonoBehaviour
    {
        private void Start()
        {
            SceneManager.LoadScene("Start");
        }
    }
}
