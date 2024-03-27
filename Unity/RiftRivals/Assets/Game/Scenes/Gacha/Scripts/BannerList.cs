using Framework.RiftRivals;
using UnityEngine;

namespace Game.Scenes.Gacha.Scripts
{
    public class BannerList : MonoBehaviour
    {
        public GameObject bannerPrefab;
        public Transform bannerList;

        private void OnEnable()
        {
            ClearList();
            FetchData();
        }

        private void ClearList()
        {
            for (int i = 0; i < bannerList.childCount; i++)
            {
                Destroy(bannerList.GetChild(i).gameObject);
            }
        }

        private void FetchData()
        {
            GachaManager.Instance.GetBanners(response => {
                foreach (var b in response.banners)
                {
                    GameObject gb = Instantiate(bannerPrefab, bannerList);
                    Banner banner = gb.GetComponent<Banner>();
                    banner.textName.text = b.name;
                    banner.bannerId = b.id;
                }
            }, err => {
                Debug.Log(err);
            });
        }
    }
}
