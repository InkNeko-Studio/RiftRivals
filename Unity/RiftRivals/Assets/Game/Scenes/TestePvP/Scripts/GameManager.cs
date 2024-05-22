using System.Collections;
using System.Collections.Generic;
using TMPro;
using UnityEngine;
using UnityEngine.UI;

public class GameManager : MonoBehaviour
{
    // Start is called before the first frame update
    public float playervantage;
    private float playermid;
    private float playerdamage;
    public float playernexusdamage;
    public float playerpercent;
    public float playernow;
    public float enemyvantage;
    public float enemymid;
    public float enemydamage;
    public float enemynexusdamage;
    public Baker baker;
    public Arthur art;
    public TMP_Text percentplayer;
    public TMP_Text percentenemy;
    public float calc;

    public float rednexuslife;
    
    
    void Start()
    {
        playervantage = baker.playervantage;
        playernexusdamage = baker.playernexusdamage;
        enemyvantage = art.playervantage;
        enemynexusdamage = art.playernexusdamage;
        Callmid();
    }

    // Update is called once per frame
    void Update()
    {
        
    }

    public void Callmid()
    {
        playermid = playervantage / 2;
        enemymid = enemyvantage / 2;
    }

    public void Calculo()
    {
        playerdamage = playermid + Random.Range(0, playermid);
        Debug.Log(playerdamage);
        enemydamage = enemymid + Random.Range(0, enemymid);
        Debug.Log(enemydamage);
        playervantage -= enemydamage;
        enemyvantage -= playerdamage;
        Callmid();
        ChangePercent();
    }

    
    public void ChangePercent()
    {
        calc = (playervantage / baker.playervantage) * 100f;
        percentplayer.text = calc + "%";
        calc = (enemyvantage / art.playervantage) * 100f;
        percentenemy.text = calc + "%";
    }

    public void HitNexus()
    {
        rednexuslife -= playernexusdamage;
    }
}
