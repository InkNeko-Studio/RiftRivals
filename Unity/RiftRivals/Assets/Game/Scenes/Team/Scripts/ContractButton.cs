using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class ContractButton : MonoBehaviour
{
    // Start is called before the first frame update
    public GetContract contract;
    public Button button;

    void Start()
    {
        contract = GameObject.Find("[Canvas] Team").GetComponent<GetContract>();
        button.onClick.AddListener(contract.InstatieteStatus);
    }

    // Update is called once per frame
    void Update()
    {

    }

}
