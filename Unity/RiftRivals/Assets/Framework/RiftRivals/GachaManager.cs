using System;
using UnityEngine;

namespace Framework.RiftRivals
{
    [Serializable]
    public class BannerEntry
    {
        public int id;
        public int characterId;
        public CharacterBase character;
        public int percentage;
    }
    
    [Serializable]
    public class Banner
    {
        public int id;
        public string name;
        public int price;
        public BannerEntry characters;
    }

    [Serializable]
    public class BannerResponse
    {
        public Banner[] banners;
    }

    [Serializable]
    public class MintRequest
    {
        public int bannerId;
    }
    
    public class GachaManager : MonoBehaviour
    {
        public static GachaManager Instance;
        
        public void Awake()
        {
            if (Instance == null)
                Instance = this;
            else
                Destroy(gameObject);
            
            DontDestroyOnLoad(gameObject);
        }
        
        public void GetBanners(Action<BannerResponse> onSuccess, Action<string> onError)
        {
            ConnectionManager.Instance.Get(Routes.Banner, data => {
                BannerResponse banners = JsonUtility.FromJson<BannerResponse>(data);
                onSuccess(banners);
            }, err => {
                onError(err.message);
            });
        }
        
        public void MintCharacter(MintRequest mintRequest, Action<MintedCharacter> onSuccess, Action<string> onError)
        {
            string data = JsonUtility.ToJson(mintRequest);
            ConnectionManager.Instance.Post(Routes.Mint, data, res => {
                MintedCharacter character = JsonUtility.FromJson<MintedCharacter>(res);
                onSuccess(character);
            }, err => {
                onError(err.message);
            });
        }
    }
}
