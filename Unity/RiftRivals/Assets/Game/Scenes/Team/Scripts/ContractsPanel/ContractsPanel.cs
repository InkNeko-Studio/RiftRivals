using System;
using Framework.RiftRivals;
using UnityEngine;
using CharacterInfo = Framework.RiftRivals.CharacterInfo;

namespace Game.Scenes.Team.Scripts.ContractsPanel
{
    public class ContractsPanel : MonoBehaviour
    {
        public GameObject contractPrefab;
        public Transform contractList;

        private void OnEnable()
        {
            ClearList();
            FetchData();
        }

        private void ClearList()
        {
            for (int i = 0; i < contractList.childCount; i++)
            {
                Destroy(contractList.GetChild(i).gameObject);
            }
        }

        private void FetchData()
        {
            CharacterManager.Instance.GetCharacters(response => {
                foreach (var character in response.mintedCharacters)
                {
                    GameObject gb = Instantiate(contractPrefab, contractList);
                    Contract contract = gb.GetComponent<Contract>();
                    contract.textName.text = character.characterBase.name;
                    CharacterInfo characterInfo = CharacterManager.Instance.GetCharacterInfo(character.characterBase.id);
                    contract.imageCharacter.sprite = characterInfo.cardPicture;
                }
            }, err => {
                Debug.Log(err);
            });
        }
    }
}
