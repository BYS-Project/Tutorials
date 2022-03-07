// SPDX-License-Identifier: MIT

// Amended by HashLips
/**
    !Disclaimer!
    These contracts have been used to create tutorials,
    and was created for the purpose to teach people
    how to create smart contracts on the blockchain.
    please review this code on your own before using any of
    the following code for production.
    HashLips will not be liable in any way if for the use 
    of the code. That being said, the code has been tested 
    to the best of the developers' knowledge to work as intended.
*/

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Burnable.sol";

contract NFT_Contract is ERC721Enumerable {
  using Strings for uint256;

  string internal baseExtension = "";

  constructor(string memory _baseExtension) ERC721("Prova Soul", "PSUO"){
    baseExtension = _baseExtension;
  }
  function _baseURI() internal view override returns(string memory){
    return "https://www.nukecraft.net/NFT/Prove/";
  }
  function mint(address to) public{
    uint256 id = totalSupply();
    _mint(to, id);
  }
  function safeMint(address to) public{
    uint256 id = totalSupply();
    _safeMint(to, id);
  }
   function tokenURI(uint256 tokenId) public view override returns (string memory) {
        require(_exists(tokenId), "ERC721Metadata: URI query for nonexistent token");
        return bytes(_baseURI()).length > 0 ? string(abi.encodePacked(_baseURI(), tokenId.toString(), baseExtension)) : "";
    }
}