using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Baker : MonoBehaviour
{
    // Start is called before the first frame update
    public int playervantage;
    public int playernexusdamage;
    public GameManager gm;
    public GameObject spawn;
    public GameObject baker;
    public Arthur art;
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        
    }
    
    private void OnTriggerEnter2D(Collider2D other)
    {
        if (other.CompareTag("enemy"))
        {
            gm.Calculo();
            if (gm.playervantage > 0)
            {
                baker.transform.position = spawn.transform.position;
            }
            else
            {
                Destroy(this.gameObject);
            }
            if (gm.enemyvantage > 0)
            {
               art.SpawnArt();
            }
            else
            {
                Destroy(other.gameObject);
            }
        }
        if(other.CompareTag("Nexus"))
        {
            Debug.Log("nexus");
            gm.HitNexus();
            if (gm.rednexuslife <= 0)
            {
                Destroy(other.gameObject);
            }
            else
            {
                baker.transform.position = spawn.transform.position;
            }
        }
    }
}
