using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

namespace Game.Scenes.Gacha.Scripts
{
    public class ScrollButton : MonoBehaviour
    {
        public Transform gachaList;
        public Scrollbar gachaScroll;
        public Button esq;
        public Button dir;

        void Awake()
        {
            gachaScroll.value = 0;
            JumpToGacha(0);
        }

        void Update()
        {
            if (gachaList.childCount <= 1)
            {
                esq.gameObject.SetActive(false);
                dir.gameObject.SetActive(false);
            }
            else
            {
                esq.gameObject.SetActive(true);
                dir.gameObject.SetActive(true);
            }
        }

        public void JumpToGacha(int gacha)
        {
            gachaScroll.value = gacha;
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

