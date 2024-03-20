// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts ^5.0.0
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";

import "contracts/CryptoLegendsCurrency.sol";

contract CryptoLegendsCharacter is ERC721, ERC721Enumerable {
    struct Character {
        string name;
        uint ability;
        uint motivation;
        uint256 lastBattle;
        address owner;
    }

    string[] characterNameList = [
        "SwiftDragon", "SavageShadow", "MysticPhoenix", "BlazingThunder", "EpicViper", 
        "FierceSpartan", "DaringNinja", "StealthyRaptor", "LethalLegend", "DynamicAssassin",
        "SwiftRaptor", "SavageNinja", "MysticLegend", "BlazingAssassin", "EpicDragon",
        "FierceShadow", "DaringThunder", "StealthySpartan", "LethalPhoenix", "DynamicViper",
        "SwiftLegend", "SavageAssassin", "MysticRaptor", "BlazingNinja", "EpicSpartan",
        "FiercePhoenix", "DaringViper", "StealthyDragon", "LethalShadow", "DynamicThunder",
        "SwiftSpartan", "SavagePhoenix", "MysticViper", "BlazingLegend", "EpicAssassin",
        "FierceRaptor", "DaringDragon", "StealthyThunder", "LethalNinja", "DynamicShadow",
        "SwiftThunder", "SavageLegend", "MysticAssassin", "BlazingRaptor", "EpicDragon",
        "FierceNinja", "DaringSpartan", "StealthyShadow", "LethalViper", "DynamicPhoenix",
        "SwiftAssassin", "SavageRaptor", "MysticThunder", "BlazingSpartan", "EpicLegend",
        "FiercePhoenix", "DaringViper", "StealthyNinja", "LethalDragon", "DynamicShadow",
        "SwiftSpartan", "SavageLegend", "MysticAssassin", "BlazingRaptor", "EpicNinja",
        "FierceDragon", "DaringThunder", "StealthyPhoenix", "LethalViper", "DynamicSpartan",
        "SwiftRaptor", "SavageNinja", "MysticLegend", "BlazingAssassin", "EpicShadow",
        "FierceSpartan", "DaringDragon", "StealthyViper", "LethalPhoenix", "DynamicThunder",
        "SwiftLegend", "SavageAssassin", "MysticRaptor", "BlazingNinja", "EpicSpartan",
        "FiercePhoenix", "DaringViper", "StealthyShadow", "LethalDragon", "DynamicThunder"
    ];

    Character[] public characterList;
    CryptoLegendsCurrency currency;
    address gameOwner;
    uint private seed;

    constructor(CryptoLegendsCurrency _currency) ERC721("CryptoLegendsCharacter", "CLC") {
        gameOwner = msg.sender;
        currency = _currency;
        seed = 0;
    }

    function _update(address to, uint256 tokenId, address auth) internal override(ERC721, ERC721Enumerable) returns (address) {
        return super._update(to, tokenId, auth);
    }

    function _increaseBalance(address account, uint128 value) internal override(ERC721, ERC721Enumerable) {
        super._increaseBalance(account, value);
    }

    function supportsInterface(bytes4 interfaceId) public view override(ERC721, ERC721Enumerable) returns (bool) {
        return super.supportsInterface(interfaceId);
    }

    function buyCharacter() external {
        require(currency.balanceOf(msg.sender) >= (300) * (10 ** 18), "Insufficient Funds!");
        require(currency.transferFrom(msg.sender, address(this), (300) * (10 ** 18)), "Unapproved Transaction!");
        currency.transfer(gameOwner, (100) * (10 ** 18));

        uint characterId = characterList.length;
        seed = uint(keccak256(abi.encode(blockhash(block.number), block.timestamp, msg.sender, seed)));

        uint characterNameIndex = seed % characterNameList.length;
        string memory characterName = characterNameList[characterNameIndex];
        uint characterAbility = 1 + seed % 1000;
        uint characterMotivation = 1 + seed % 10;
        characterList.push(Character(characterName, characterAbility, characterMotivation, 0, msg.sender));

        _mint(msg.sender, characterId);
    }

    modifier onlyOnwerOf(uint characterId) {
        require(characterList[characterId].owner == msg.sender, "Must be owner of character!");
        _;
    }

    function joinChampionship(uint characterId) external onlyOnwerOf(characterId) {
        require(block.timestamp - characterList[characterId].lastBattle > 24 * 60, "Wait 1 day to join again!");
        require(characterList[characterId].motivation >  0, "Not motivated!");

        seed = uint(keccak256(abi.encode(blockhash(block.number), block.timestamp, msg.sender, seed)));

        uint enemyPower = seed % 1000;

        if (characterList[characterId].ability > enemyPower)
            currency.transfer(msg.sender, (10) * (10 ** 18));
        else
            characterList[characterId].motivation -= 1;

        characterList[characterId].lastBattle = block.timestamp;
    }

    function getPoolValue() external view returns (uint value) {
        return currency.balanceOf(address(this));
    }

    function retrievePool() external {
        require(msg.sender == gameOwner, "Must be game owner!");
        currency.transfer(gameOwner, currency.balanceOf(address(this)));
    }
}