using System.Collections;
using System.Collections.Generic;
using Framework.RiftRivals;
using UnityEngine;

public class LogOutScript : MonoBehaviour
{
    
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        
    }

    public void LogOut()
    {
        AuthManager.Instance.Logout();
    }
}
