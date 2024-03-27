using System;
using Framework.RiftRivals;
using Game.Shared.UI.Popup;
using UnityEngine;
using CharacterInfo = Framework.RiftRivals.CharacterInfo;

namespace Game.Scenes.Gacha.Scripts
{
    public class CharacterResult : MonoBehaviour
    {
        public Transform characterList;
        public GameObject characterCard;

        public void DisplayCharacter(MintedCharacter character)
        {
            GetComponent<Popup>().Show();
            DeleteAllChildren();

            GameObject gb = Instantiate(characterCard, characterList);
            CharacterCard card = gb.GetComponent<CharacterCard>();
            card.textName.text = character.characterBase.name;
            CharacterInfo characterInfo = CharacterManager.Instance.GetCharacterInfo(character.characterBase.id);
            card.imageCharacter.sprite = characterInfo.cardPicture;
        }

        public void DeleteAllChildren()
        {
            for (int i = 0; i < characterList.childCount; i++)
            {
                Destroy(characterList.GetChild(0).gameObject);
            }
        }
    }
}