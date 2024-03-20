using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

namespace Game.Scenes.Shop.Script
{
    public class ScrollUI : MonoBehaviour
    {
        public Scrollbar shopScroll;

        public void JumpTo(float where)
        {
            shopScroll.value = where;
        }
    }

}
