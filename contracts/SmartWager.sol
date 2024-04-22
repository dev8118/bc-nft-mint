// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract SmartWager is ERC721Enumerable, Ownable {
    uint private _tokenIdCounter = 0;
    uint private cardLimitPerAccount = 5;
    uint private supplyLimit = 1000;

    uint private price = 2 * 10**17;

    mapping(uint => uint) private cardRarity;
    mapping(uint => uint) private cardPrice;
    mapping(uint => uint) private cardEndAt;

    constructor() ERC721("Smart Wager", "SW") Ownable(msg.sender) {
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

    function exists(uint256 tokenId) internal view returns (bool) {
        address owner = ownerOf(tokenId);
        return owner != address(0);
    }

    function setPrice(uint prc) public onlyOwner {
        price = prc;
        // update cards price
        cardPrice[0] = price * 2; // for random card generation
        cardPrice[1] = price * 5; // diamond
        cardPrice[2] = price * 3; // gold
        cardPrice[3] = price * 2; // silver
        cardPrice[4] = price * 1; // bronze
    }

    function getRemain() public view returns (uint) {
        return supplyLimit - totalSupply();
    }

    function getPrice() public view returns (uint) {
        return price;
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
        require(exists(tokenId), "Token does not exist");
        return cardEndAt[tokenId];
    }

    function setCardExpiration(uint tokenId, uint endTime) public onlyOwner{
        require(exists(tokenId), "Token does not exist");
        cardEndAt[tokenId] = endTime;
    }

    function mintCard(uint cardType) public {
        require(_tokenIdCounter < supplyLimit, "Maximum cards minted");
        require(balanceOf(msg.sender) <= cardLimitPerAccount, "Maximun cards minted for the account");

        _tokenIdCounter += 1;
        uint newTokenId = _tokenIdCounter;
        _safeMint(msg.sender, newTokenId);
        cardRarity[newTokenId] = cardType;
    }

    function mintSpecificCard(uint cardType, uint quantity) public payable {
        require(quantity + balanceOf(msg.sender) <= cardLimitPerAccount, "Over maximun limit for an account");
        require(msg.value >= cardPrice[cardType] * quantity, "Not sufficient ether for specific NFT minting");
        for(uint8 i = 0; i < quantity; i++) {
            mintCard(cardType);
        }
    }

    function mintRandomCard(uint quantity) public payable {
        require(quantity + balanceOf(msg.sender) <= cardLimitPerAccount, "Over maximun limit for an account");
        require(msg.value >= cardPrice[0] * quantity, "Not sufficient ether for random NFT minting");
        
        uint cardType;
        for(uint8 i = 0; i < quantity; i++) {
            uint randomNumber = uint(keccak256(abi.encodePacked(block.timestamp, msg.sender, i))) % 1000;
            if (randomNumber == 1) {
                cardType = 1; // 'Diamond' (1%)
            } else if (randomNumber <= 10) {
                cardType = 2; // 'Gold' (10%)
            } else if(randomNumber <= 489) {
                cardType = 3; // 'Silver' (48.9%)
            } else {
                cardType = 4; // 'Bronze' (50%)
            }
            mintCard(cardType);
        }
    }

    function burnCard(uint tokenId) public {
        require(ownerOf(tokenId) == msg.sender || getApproved(tokenId) == msg.sender || msg.sender == owner(), "Caller is not owner nor approved");
        _burn(tokenId);
    }

    function getCardType(uint tokenId) public view returns (string memory) {
        require(exists(tokenId), "Token does not exist");

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