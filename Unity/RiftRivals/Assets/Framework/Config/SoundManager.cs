using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

namespace Framework.Config
{
    public class SoundManager : MonoBehaviour
    {
        // Start is called before the first frame update
        public static SoundManager Instance;
        public AudioSource late;
        public string scenename;
        public AudioSource button;
        public AudioSource menu;


        public void Awake()
        {
            if (Instance == null)
                Instance = this;
            else
                Destroy(gameObject);

            DontDestroyOnLoad(gameObject);
        }
        
        public void PlayButton()
        {
            button.Play();
        }

        public void PlayLate()
        {
            late.Play();
            menu.Stop();
        }
        public void PlayMenu()
        {
            menu.Play();
            late.Stop();
        }
    }
    
}
