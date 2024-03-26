using Framework.RiftRivals;
using UnityEngine;

namespace Game.Scenes.MainMenu.Scripts
{
    public class Test : MonoBehaviour
    {
        void Start()
        {
            CharacterManager.Instance.GetCharacters(response => {
                foreach (var character in response.mintedCharacters)
                {
                    Debug.Log(character.characterBase.name);
                }
            }, err => {
                Debug.Log(err);
            });
        }
    }
}
