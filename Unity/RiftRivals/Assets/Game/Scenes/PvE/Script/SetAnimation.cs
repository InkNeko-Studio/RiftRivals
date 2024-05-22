using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class SetAnimation : MonoBehaviour
{
    // Start is called before the first frame update

    public Animator keyAnim;
    public bool[] wins = new bool[3];
    void Start()
    {
        SetWinner();
    }

    // Update is called once per frame
    void Update()
    {
        
    }

    private void SetWinner()
    {
        if (wins[0] == false)
        {
            keyAnim.SetTrigger("LoseFirst");
        }else if (wins[0] == true && wins[1] == false)
        {
            keyAnim.SetTrigger("LoseSecond");
        }else if (wins[0] == true && wins[1] == true && wins[2] == false)
        {
            keyAnim.SetTrigger("LoseLast");
        }
    }
}
