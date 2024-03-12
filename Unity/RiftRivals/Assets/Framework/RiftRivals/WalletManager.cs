using System;
using UnityEngine;

namespace Framework.RiftRivals
{
    [Serializable]
    public class WalletResponse
    {
        public int fans;
        public int coins;
        public int diamonds;
    }
    
    public class WalletManager : MonoBehaviour
    {
        public static WalletManager Instance;
        
        public void Awake()
        {
            if (Instance == null)
                Instance = this;
            else
                Destroy(gameObject);
            
            DontDestroyOnLoad(gameObject);
        }

        public void GetWallet(Action<int, int, int> onData, Action<string> onError)
        {
            ConnectionManager.Instance.Get(Routes.Wallet, res => {
                WalletResponse walletResponse = JsonUtility.FromJson<WalletResponse>(res);
                onData(walletResponse.fans, walletResponse.coins, walletResponse.diamonds);
            }, exception => {
                onError(exception.message);
            });
        }
    }
}