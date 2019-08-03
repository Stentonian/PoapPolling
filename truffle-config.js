const path = require("path");
const HDWalletProvider = require('truffle-hdwallet-provider');
// This is throwaway keys for hackathon ONLY!! Please never use again, EVER!
const mnemonic = 'dumb gown nose volume total father license lady empower snow body tag'; 

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    development: {
      host: "127.0.0.1",     // Localhost (default: none)
      port: 8545,            // Standard Ethereum port (default: none)
      network_id: "*",       // Any network (default: none)
      gasPrice: 1000000000, // 1 gwei
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
