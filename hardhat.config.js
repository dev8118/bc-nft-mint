require("@nomiclabs/hardhat-waffle");

require('dotenv').config();
//require("@nomiclabs/hardhat-ethers");
const { API_URL, PRIVATE_KEY } = process.env;

const accounts = {
  mnemonic: "test test test test test test test test test test test junk",
};

module.exports = {
  solidity: "0.8.20",
  defaultNetwork: "local",
  networks: {
    local: {
      url: "http://localhost:8545",
    },
    // sepolia: {
    //     url: API_URL,
    //     accounts: [`0x${PRIVATE_KEY}`]
    //  }
  },
};