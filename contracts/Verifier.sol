pragma solidity ^0.5.0;

import "./Ownable.sol";

// this function comes from the ERC721 token
contract PoapInterface {
    function balanceOf(address owner) public view returns (uint256);
}

contract Verifier is Ownable {
    PoapInterface poapToken;
    address poapAddress;

    function setPoapToken(address _address) public /*onlyOwner*/ {
        poapAddress = _address;
        poapToken = PoapInterface(_address);
    }

    function verifyUserOwnsAtLeastOnePoapToken(address _user) public view {
        require(poapToken.balanceOf(_user) > 0, "User does not own token");
    }

    function getTokenAddress() public view returns (address) {
        return poapAddress;
    }

}