using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class MoveUp : MonoBehaviour
{
    // Start is called before the first frame update
    void Start()
    {
        
    }
    public float speed = 5f; // Velocidade de movimento para cima

        void FixedUpdate()
        {
            // Move o GameObject para cima ao longo do eixo Y
            transform.Translate(Vector3.up * speed * Time.deltaTime);
        }

        
}
