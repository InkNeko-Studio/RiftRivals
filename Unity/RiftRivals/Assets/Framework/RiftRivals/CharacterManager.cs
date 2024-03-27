using System;
using UnityEngine;

namespace Framework.RiftRivals
{
    [Serializable]
    public class CharacterBase
    {
        public int id;
        public string name;
    }
    
    [Serializable]
    public class MintedCharacter
    {
        public int id;
        public int userId;
        public CharacterBase characterBase;
    }
    
    [Serializable]
    public class CharacterResponse
    {
        public MintedCharacter[] mintedCharacters;
    }
    
    public class CharacterManager : MonoBehaviour
    {
        public static CharacterManager Instance;

        public CharacterInfo[] charactersInfo;
        
        public void Awake()
        {
            if (Instance == null)
                Instance = this;
            else
                Destroy(gameObject);
            
            DontDestroyOnLoad(gameObject);
        }

        public void GetCharacters(Action<CharacterResponse> onSuccess, Action<string> onError)
        {
            ConnectionManager.Instance.Get(Routes.Character, data => {
                CharacterResponse characters = JsonUtility.FromJson<CharacterResponse>(data);
                onSuccess(characters);
            }, err => {
                onError(err.message);
            });
        }

        public CharacterInfo GetCharacterInfo(int id)
        {
            if (id > charactersInfo.Length) return new CharacterInfo();
            return charactersInfo[id - 1];
        }
    }
}
