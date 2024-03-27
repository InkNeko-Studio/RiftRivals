using Framework.RiftRivals;
using TMPro;
using UnityEngine;

namespace Game.Scenes.Gacha.Scripts
{
    public class Banner : MonoBehaviour
    {
        public TMP_Text textName;
        public int bannerId;

        public CharacterResult characterResult;

        public void Gacha()
        {
            MintRequest mintRequest = new MintRequest();
            mintRequest.bannerId = bannerId;
            GachaManager.Instance.MintCharacter(mintRequest, character => {
                characterResult.DisplayCharacter(character);
            }, err => {
                Debug.Log(err);
            });
        }
    }
}
