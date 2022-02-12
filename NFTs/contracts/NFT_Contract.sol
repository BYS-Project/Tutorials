// SPDX-License-Identifier: GPL-3.0

// By Enrypase ;D

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

pragma solidity ^0.8.0;

contract NFT_Contract is ERC721Enumerable, Ownable{
    // Environment variables
    string public baseURI;
    string public extension = ".json";
    uint256 public cost = 0.001 ether;
    uint256 public maxSupply = 100;
    uint256 public mintForOwner = 1;
    mapping(address => bool) public whitelisted;
    // Constructor
    constructor(
        string memory _name,
        string memory _symbol,
        string memory _baseURI
    ) ERC721(_name, _symbol){
        setBaseURI(_baseURI);
        // Send to the owner 1 NFT
        mint(msg.sender, mintForOwner);
    }
    // Mint function
    function mint(address _address, uint256 _amount) public payable{
        // Requirements
        require(totalSupply() < maxSupply, "Total Supply already reached!");
        require(_amount > 0, "The required amount must be greater than zero!");
        require(_amount + totalSupply() <= maxSupply, "Max Supply exceded. Please insert a lower amount of NFTs");
        if (msg.sender != owner()){
            require(whitelisted[msg.sender] == true);
            require(msg.value >= cost * _amount, "The inserted amount is not valid!");
        }
        // Mint function
        for (uint256 i = 0; i < _amount; i++){
            _safeMint(_address, totalSupply() + 1);
        }
    }
    // Wallet of Owner function -> Gets the amount of NFTs that the owner has with relative ids
    function walletOfOwner(address _owner) public view returns (uint256[] memory){
        uint256 tokenCount = balanceOf(_owner);
        uint256[] memory tokenIds = new uint256[](tokenCount);
        for (uint256 i = 0; i < tokenCount; i++){
            tokenIds[i] = tokenOfOwnerByIndex(_owner, i);
        }
        return tokenIds;
    }
    // Get the token URI
    function tokenURI (uint256 tokenId) public view virtual override returns(string memory){
        // Requirements
        require (_exists(tokenId), "This token ID doesn't refer to an existing one!");
        return bytes(baseURI).length > 0
        ? string(abi.encodePacked(baseURI, tokenId, extension))
        : "bruh";
    }
    // Functions that only the owner can axcess
    function setBaseURI(string memory _baseURI) public onlyOwner{
        baseURI = _baseURI;
    }
    function setExtension(string memory _extension) public onlyOwner{
        extension = _extension;
    }
    function setCost(uint256 _cost) public onlyOwner{
        cost = _cost;
    }
    function addWhitelisted(address _user) public onlyOwner{
        whitelisted[_user] = true;
    }
    function removeWhitelisted(address _user) public onlyOwner{
        whitelisted[_user] = false;
    }
    function setMintForOwner(uint256 _amount) public onlyOwner{
        mintForOwner = _amount;
    }
    // Withdraw Function
    function withdraw() public payable onlyOwner{
        require(payable(msg.sender).send(address(this).balance));
    }
    // Get functions
    function getBalance() public view returns (uint256){
        return address(this).balance;
    }
    function getTotalSupply() public view returns (uint256){
        return totalSupply();
    }
    function getMintForOwner() public view returns (uint256){
        return mintForOwner;
    }
    function getBaseURI() public view returns (string memory){
        return baseURI;
    }
    function getExtension() public view returns (string memory){
        return extension;
    }

}