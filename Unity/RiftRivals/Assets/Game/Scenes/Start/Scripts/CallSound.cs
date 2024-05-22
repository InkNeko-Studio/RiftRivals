using System.Collections;
using System.Collections.Generic;
using Framework.Config;
using UnityEngine;

public class CallSound : MonoBehaviour
{
    // Start is called before the first frame update
    void Start()
    {
        SoundManager.Instance.PlayLate();
    }

    // Update is called once per frame
    void Update()
    {
        
    }

    public void Button()
    {
        SoundManager.Instance.PlayButton();
    }
}
