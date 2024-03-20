using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

namespace Game.Scenes.Gacha.Scripts
{
    public class ScrollButton : MonoBehaviour
    {
        // Start is called before the first frame update
        public Scrollbar gachascroll;
        public Button esq;
        public Button dir;

        void Awake()
        {
            gachascroll.value = 0;
            JumpToGacha(0);
        }

        void Start()
        {
        
        }

    
        void Update()
        {
        
        }

        public void JumpToGacha(int gacha)
        {
            gachascroll.value = gacha;
            if (gacha == 1)
            {
                dir.interactable = false;
            }
            else
            {
                dir.interactable = true;
            }

            if (gacha == 0)
            {
                esq.interactable = false;
            }
            else
            {
                esq.interactable = true;
            }

        }
    } 
}

