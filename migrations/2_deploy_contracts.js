var Poll = artifacts.require("./Poll.sol");
var Ownable = artifacts.require("./Ownable.sol");
var Verifier = artifacts.require("./Verifier.sol");

var SimpleStorage = artifacts.require("./SimpleStorage.sol");

module.exports = function(deployer) {
  deployer.deploy(Verifier);
  deployer.deploy(Verifier).then(function() {
    return deployer.deploy(Poll, Verifier.address);
  });

  deployer.deploy(Ownable);

  deployer.deploy(SimpleStorage);
};
