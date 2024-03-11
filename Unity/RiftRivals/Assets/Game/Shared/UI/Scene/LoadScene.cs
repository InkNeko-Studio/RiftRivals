using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

namespace Game.Shared.UI.Scene
{
    public class LoadScene : MonoBehaviour
    {
        public void GoToScene(string scene)
        {
            SceneManager.LoadScene(scene);
        }
    }
}

