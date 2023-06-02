// SPDX-License-Identifier: MIT
pragma solidity 0.8.20;


import "@openzeppelin/contracts/token/ERC721/ERC721.sol";


contract BabyAlpha is ERC721 {
    constructor() ERC721("Baby Alpha", "BABY ALPHA") {
    }

    function _baseURI() internal pure override returns (string memory) {
        return "ipfs://QmXJ9VZ955JEUzpqzSCKYUrCUGDYRXQmXeWJNAcm4AtaTq/";
    }

    function mint(uint tokenId) public {
        _mint(msg.sender, tokenId);
    }
}
