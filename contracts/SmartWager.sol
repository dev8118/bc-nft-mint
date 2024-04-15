// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "../node_modules/@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "../node_modules/@openzeppelin/contracts/access/Ownable.sol";

contract SmartWager is ERC721Enumerable, Ownable {
    uint private _tokenIdCounter = 0;
    uint private cardLimitPerAccount = 5;
    uint private supplyLimit = 1000;

    uint private price = 0.1 ether;

    mapping(uint => uint) private cardRarity;
    mapping(uint => uint) private cardPrice;
    mapping(uint => uint) private cardEndAt;

    constructor() ERC721("Smart Wager", "SW") {
        cardRarity[1] = 1;
        cardRarity[2] = 10;
        cardRarity[3] = 489;
        cardRarity[4] = 500;

        cardPrice[0] = price * 2; // for random card generation
        cardPrice[1] = price * 5; // diamond
        cardPrice[2] = price * 3; // gold
        cardPrice[3] = price * 2; // silver
        cardPrice[4] = price * 1; // bronze
    }

    function setCardLimitPerAccout(uint count) public onlyOwner{
        require(count < supplyLimit, "Unvalid count number");
        cardLimitPerAccount = count;
    }

    function getCardLImitPerAccount() public view returns (uint) {
        return cardLimitPerAccount;
    }

    function setSupplyLimit(uint limit) public onlyOwner {
        supplyLimit = limit;
    }

    function getSupplyLimit() public view returns (uint) {
        return supplyLimit;
    }

    function getCardExpiration(uint tokenId) public view returns (uint) {
        require(_exists(tokenId), "Token does not exist");
        return cardEndTimeAt[tokenId];
    }

    function setCardExpiration(uint tokenId, uint endTime) public onlyOwner{
        require(_exists(tokenId), "Token does not exist");
        cardEndAt[newTokenId] = cardEndTime;
    }

    function mintCard(uint cardType, uint cardEndTime) public {
        require(_tokenIdCounter < supplyLimit, "Maximum cards minted");
        require(balanceOf(msg.sender) >= cardLimitperAccount, "Maximun cards minted for the account");

        _tokenIdCounter += 1;
        uint newTokenId = _tokenIdCounter;
        _safeMint(msg.sender, newTokenId);
        cardRarity[newTokenId] = cardType;
        cardEndAt[newTokenId] = cardEndTime;
    }

    function mintSpecificCard(uint cardType) public payable {
        uint cardEndTime;
        if (cardType == 1) {
            cardEndTime = block.timestamp + 120 days;
        } else if (cardType == 2) {
            cardEndTime = block.timestamp + 60 days;
        } else if(cardType == 3) {
            cardEndTime = block.timestamp + 25 days;
        } else if(cardType == 4) {
            cardEndTime = block.timestamp + 10 days;
        } else {
            revert("Invalid card type");
        }

        require(msg.value >= cardPrice[cardType], "Not sufficient ether for specific NFT minting");
        mintCard(cardType, cardEndTime);
    }

    function mintRandomCard() public payable {
        require(msg.value >= cardPrice[0], "Not sufficient ether for random NFT minting");

        uint randomNumber = uint(keccak256(abi.encodePacked(block.timestamp, msg.sender, newTokenId))) % 1000;
        // Determine card type based on rarity
        uint cardType;
        uint cardEndTime;
        if (randomNumber == 1) {
            cardType = 1; // 'Diamond' (1%)
            cardEndTime = block.timestamp + 120 days;
        } else if (randomNumber <= 10) {
            cardType = 2; // 'Gold' (10%)
            cardEndTime = block.timestamp + 60 days;
        } else if(randomNumber <= 489) {
            cardType = 3; // 'Silver' (48.9%)
            cardEndTime = block.timestamp + 25 days;
        } else {
            cardType = 4; // 'Bronze' (50%)
            cardEndTime = block.timestamp + 10 days;
        }

        mintCard(cardType, cardEndTime);
    }

    function burnCard(uint tokenId) public {
        require(_isApprovedOrOwner(msg.sender, tokenId), "Caller is not owner nor approved");
        _burn(tokenId);
    }

    function getCardType(uint tokenId) public view returns (string memory) {
        require(_exists(tokenId), "Token does not exist");

        uint rarityIndex = cardRarity[tokenId];
        if (rarityIndex == 1) {
            return "Diamond";
        } else if (rarityIndex == 2) {
            return "Gold";
        } else if (rarityIndex == 3) {
            return "Silver";
        } else if (rarityIndex == 4) {
            return "Bronze";
        }

        return "";
    }

    function withdraw() public payable onlyOwner {
        payable(owner()).transfer(address(this).balance);
    }
}