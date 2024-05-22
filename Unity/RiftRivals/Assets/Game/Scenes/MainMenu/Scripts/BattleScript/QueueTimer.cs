using Framework.RiftRivals;
using Game.Shared.UI.Popup;
using TMPro;
using UnityEngine;
using UnityEngine.UI;

namespace Game.Scenes.MainMenu.Scripts.BattleScript
{
    public class QueueTimer : MonoBehaviour
    {
        public Popup popup;
        public TMP_Text timerText;

        public Button[] concurrentButtons;

        private float _time = 0.0f;
        private bool _running = false;

        public void StartTimer()
        {
            _time = 0.0f;
            _running = true;
            SetConcurrentButtons(false);
        }

        public void CancelQueue()
        {
            _running = false;
            MatchmakingManager.Instance.ExitQueue();
            popup.Hide();
            SetConcurrentButtons(true);
        }

        private void Update()
        {
            if (!_running) return;
            
            _time += Time.deltaTime;

            int minutes = Mathf.FloorToInt(_time / 60f);
            int seconds =  Mathf.FloorToInt(_time - minutes * 60);
            int hours = Mathf.FloorToInt(minutes / 60f);
            minutes -= hours * 60;

            timerText.text = $"{hours.ToString("00")}:{minutes.ToString("00")}:{seconds.ToString("00")}";
        }

        public void SetConcurrentButtons(bool active)
        {
            foreach (var button in concurrentButtons)
            {
                button.interactable = active;
            }
        }
    }
}
