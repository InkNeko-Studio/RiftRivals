using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class GetContract : MonoBehaviour
{
    public GameObject playerstatus;
    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        
    }

    public void InstatieteStatus()
    {
        Instantiate(playerstatus, this.transform);
    }
    public void DestroyCanvas()
    {
        Destroy(this.gameObject);
    }
}
