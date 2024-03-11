using System.Collections;
using System.Collections.Generic;
using UnityEngine;

namespace Game.Scenes.MainMenu.Scripts
{
    public class Play : MonoBehaviour
    {
        public GameObject battlePanel;
        
        public void OpenBattle()
        {
            battlePanel.SetActive(true);
        }
        public void CloseBattle()
        {
            battlePanel.SetActive(false);
        }

    }
}

