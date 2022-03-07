# Tutorials
Here you can find all the tutorials about
- NFTs
## NFTs
### Requirements
- Image in .png or .jpeg
- ⚠️Why to chose one instead of another?
- JSON data for describing the object [click here to see the OpenSea documentation](https://docs.opensea.io/docs/metadata-standards)
- ⚠️Where should them be uploaded (Normal server? Take a look @ IPFS!) -> We need data uploaded in a always-persistent place like a blockchain!
### IDE:
- Remix
- Other IDEs f.e. Visual Studio Code
## Testing
### Code:
Depends from the environment. Fe in brownie you can build python tests and then perform the following command for texting it.
```python
brownie test [--network] [networkName]
```
You can find some code here:
- [ERC721](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC721/ERC721.sol)
- [ERC165](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/utils/introspection/ERC165.sol)
- [IERC721Metadata](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC721/extensions/IERC721Metadata.sol)
- [ERC721URIStorage](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC721/extensions/ERC721URIStorage.sol) 
- [ERC721Enumerable](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC721/extensions/ERC721Enumerable.sol)
- [ERC721Burnable](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC721/extensions/ERC721Burnable.sol)
### Nfts:
You can test your NFTS on [The OpenSea Testnets](https://testnets.opensea.io/) after the publishment of the Smart Contract
## Other
### General knowledge
___What is ERC?:___ It stands for "Ethereum Request for Comment", it can compared to a standard.<br>
___What is ERC-721:___ It gives the possibility to create digitals tokens that rapresent valuable non-fungible collectibles!<br>
-  Take a look at documentation [here](https://docs.openzeppelin.com/contracts/3.x/api/token/erc721#IERC721-balanceOf-address-) and [here](https://eips.ethereum.org/EIPS/eip-721)

### Useful resources: 
[NFT contract example](https://github.com/HashLips/hashlips_nft_contract)

-- Come Abbinare Metadata --
Perché devo trovare un codice di partenza decente. Altrimenti non va niente!
