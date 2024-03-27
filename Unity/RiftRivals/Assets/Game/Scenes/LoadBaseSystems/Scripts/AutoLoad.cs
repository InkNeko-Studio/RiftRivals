using System.Collections;
using Framework.RiftRivals;
using UnityEngine;
using UnityEngine.SceneManagement;

namespace Game.Scenes.LoadBaseSystems.Scripts
{
    public class AutoLoad : MonoBehaviour
    {
        public GameObject skipButton;
        private bool _isAuthenticated = false;
        
        private void Start()
        {
            skipButton.SetActive(false);
            StartCoroutine(LoadingScreen());
            
            string refreshToken = PlayerPrefs.GetString("refreshToken", "");
            ConnectionManager.Instance.accessToken = refreshToken;
            ConnectionManager.Instance.refreshToken = refreshToken;
            AuthManager.Instance.Reauthenticate(() => {
                Debug.Log("Authenticated");
                _isAuthenticated = true;
                skipButton.SetActive(true);
            }, err => {
                _isAuthenticated = false;
                skipButton.SetActive(true);
                Debug.Log("Unauthorized");
            });
        }

        private IEnumerator LoadingScreen()
        {
            yield return new WaitForSeconds(8);
            if (_isAuthenticated)
                SceneManager.LoadScene("MainMenu");
            else
                SceneManager.LoadScene("Start");
        }

        public void Skip()
        {
            if (_isAuthenticated)
                SceneManager.LoadScene("MainMenu");
            else
                SceneManager.LoadScene("Start");
        }
    }
}
