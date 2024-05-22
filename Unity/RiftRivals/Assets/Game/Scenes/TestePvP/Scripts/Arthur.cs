using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Arthur : MonoBehaviour
{
    
    public int playervantage;
    public int playernexusdamage;
    public GameManager gm;
    public GameObject art;
    public GameObject spawn;
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        
    }
    private void OnTriggerEnter2D(Collider2D other)
    {
        if (other.CompareTag("Player"))
        {
            
        }
    }

    public void SpawnArt()
    {
        art.transform.position = spawn.transform.position;
    }
}
