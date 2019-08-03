
pragma solidity ^0.5.0;

import "./Ownable.sol";

contract Verifier is Ownable {
    address poapToken; // this should be an ERC721 token

    function setPoapToken(address _address) public onlyOwner {
        poapToken = _address;
    }

    function isUserAbleToSubmitAnswer(address _user) public pure returns (bool) {
        return true;
    }

}