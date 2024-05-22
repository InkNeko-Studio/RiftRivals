using System.Collections;
using System.Collections.Generic;
using UnityEngine;


namespace Game.Scenes.MainMenu.Scripts.CameraScript
{

    public class CameraMoviment : MonoBehaviour
    {
        // Start is called before the first frame update
        [SerializeField] private Camera cam;
        private Vector3 dragOrientation;
        [SerializeField] private float zoomState, minSize, maxSize;
        [SerializeField] private GameObject boundary;
        
        // Update is called once per frame
        void Update()
        {
            Pamcamera();
            ZoomIn();
            ZoomOut();
            ClampCameraToBounds();
        }

        private void Pamcamera()
        {
            if (Input.GetMouseButtonDown(0))
            {
                dragOrientation = cam.ScreenToWorldPoint(Input.mousePosition);

            }

            if (Input.GetMouseButton(0))
            {
                Vector3 movimentDiference = dragOrientation - cam.ScreenToWorldPoint(Input.mousePosition);
                // print("origem:" + dragOrientation + " new:" + cam.ScreenToWorldPoint(Input.mousePosition) +
                      // " diference: " + movimentDiference);
                cam.transform.position += movimentDiference;
            }

        }

        public void ZoomIn()
        {
            if (Input.GetAxis("Mouse ScrollWheel") > 0)
            {
                float newsize = cam.orthographicSize - zoomState;

                cam.orthographicSize = Mathf.Clamp(newsize, minSize, maxSize);
            }

        }

        public void ZoomOut()
        {
            if (Input.GetAxis("Mouse ScrollWheel") < 0)
            {
                float newsize = cam.orthographicSize + zoomState;

                cam.orthographicSize = Mathf.Clamp(newsize, minSize, maxSize);
            }
        }

        private void ClampCameraToBounds()
        {
            float cameraHeight = cam.orthographicSize * 2f;
            float cameraWidth = cameraHeight * cam.aspect;
            
            float boundaryLeft = boundary.transform.position.x - boundary.transform.localScale.x / 2f;
            float boundaryRight = boundary.transform.position.x + boundary.transform.localScale.x / 2f;
            float boundaryTop = boundary.transform.position.y + boundary.transform.localScale.y / 2f;
            float boundaryBottom = boundary.transform.position.y - boundary.transform.localScale.y / 2f;

           
            float clampedX = Mathf.Clamp(cam.transform.position.x, boundaryLeft + cameraWidth / 2f,
                boundaryRight - cameraWidth / 2f);
            float clampedY = Mathf.Clamp(cam.transform.position.y, boundaryBottom + cameraHeight / 2f,
                boundaryTop - cameraHeight / 2f);

            
            cam.transform.position = new Vector3(clampedX, clampedY, cam.transform.position.z);
        }
    }
}