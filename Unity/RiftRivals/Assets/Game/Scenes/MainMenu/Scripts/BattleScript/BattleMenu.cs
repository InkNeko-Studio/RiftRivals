using Framework.RiftRivals;
using Game.Shared.UI.Popup;
using UnityEngine;

namespace Game.Scenes.MainMenu.Scripts.BattleScript
{
    public class BattleMenu : MonoBehaviour
    {
        public Popup popup;
        public Popup queuePopup;
        public QueueTimer queueTimer;
        
        public void EnterPvpQueue()
        {
            popup.Hide();
            queuePopup.Show();
            queueTimer.StartTimer();
            MatchmakingManager.Instance.EnterQueue((opponent) => {
                Debug.Log($"Match Found: {opponent}");
            }, (queue) => {
                Debug.Log($"Queue: {queue}");
            }, () => {
                Debug.Log("Queue Error");
            });
        }
    }
}
