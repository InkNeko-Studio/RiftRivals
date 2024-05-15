using System.Collections;
using System.Collections.Generic;
using Game.Shared.UI.Popup;
using UnityEngine;
using UnityEngine.UIElements;
using Button = UnityEngine.UI.Button;

public class CelphoneScript : MonoBehaviour
{
    // Start is called before the first frame update
    [SerializeField] private Animator anim;
    public bool check;
    public Popup pop;
    [SerializeField] private Button _celbutton;
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        
    }

    public void Check()
    {
        if (check == true)
        {
            check = false;
            UpAnim();
        }
        else
        {
            check = true;
            DownAnim();
        }
    }

    public void UpAnim()
    {
        pop.Show();
    }

    public void DownAnim()
    {
        anim.SetTrigger("Down");
        _celbutton.interactable = false;
        Invoke("CallHide",1);
    }

    public void CallHide()
    {
        pop.Hide();
        _celbutton.interactable = true;
    }
    
}
