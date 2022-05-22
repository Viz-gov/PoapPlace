const HDWalletProvider = require('@truffle/hdwallet-provider');
const mnemonic = "orange apple banana ...";

module.exports = {
  networks: {
    mainnet: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "https://wild-fragrant-dew.rinkeby.quiknode.pro/ed28afb5d09bf564b48e737bc592af97a9f69fef/")
      },
      gas: 5000000,
      gasPrice: 5e9,
      network_id: 1
    }
  }
};