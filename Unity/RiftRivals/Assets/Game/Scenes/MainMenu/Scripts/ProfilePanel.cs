using System;
using Framework.RiftRivals;
using TMPro;
using UnityEngine;

namespace Game.Scenes.MainMenu.Scripts
{
    public class ProfilePanel : MonoBehaviour
    {
        public TMP_Text textDisplayName;
        public TMP_Text textId;
        public TMP_Text textTeamName;

        private void OnEnable()
        {
            ProfileManager.Instance.GetProfile(profile => {
                textDisplayName.text = profile.displayName;
                textId.text = $"{profile.id:000000}";
                textTeamName.text = profile.teamName;
            }, err => {
                Debug.Log(err);
            });
        }
    }
}
