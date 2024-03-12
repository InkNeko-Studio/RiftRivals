using Framework.RiftRivals;
using TMPro;
using UnityEngine;

namespace Game.Scenes.MainMenu.Scripts
{
    public class WalletPanel : MonoBehaviour
    {
        public TMP_Text textFans;
        public TMP_Text textCoins;
        public TMP_Text textDiamonds;
        
        private void Start()
        {
            RefreshWallet();
        }
        
        private void RefreshWallet()
        {
            WalletManager.Instance.GetWallet((fans, coins, diamonds) => {
                textFans.text = fans.ToString();
                textCoins.text = coins.ToString();
                textDiamonds.text = diamonds.ToString();
            }, err => {
                Debug.Log(err);
            });
            
            Invoke(nameof(RefreshWallet), 5);
        }
    }
}
