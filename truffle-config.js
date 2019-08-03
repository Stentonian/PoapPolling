const path = require("path");
const HDWalletProvider = require('truffle-hdwallet-provider');
// This is throwaway keys for hackathon ONLY!! Please never use again, EVER!
const mnemonic = 'dumb gown nose volume total father license lady empower snow body tag'; 

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    develop: {
      port: 8545
    },
    matic: {
      network_id: '*',
      provider: new HDWalletProvider(mnemonic, 'https://testnet2.matic.network', 0),
      gas: 4700000,
      gasPrice: 0,
      skipDryRun: true,
    }
  }
};
