using System.Collections;
using UnityEngine;
using UnityEngine.SceneManagement;

namespace Game.Scenes.LoadBaseSystems.Scripts
{
    public class AutoLoad : MonoBehaviour
    {
        private void Start()
        {
            StartCoroutine(LoadingScreen());
        }

        private IEnumerator LoadingScreen()
        {
            AsyncOperation load = SceneManager.LoadSceneAsync("Start");
            load.allowSceneActivation = false;
            yield return new WaitForSeconds(8);
            load.allowSceneActivation = true;
        }
    }
}
