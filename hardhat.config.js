require("@nomiclabs/hardhat-waffle");

require('dotenv').config();
//require("@nomiclabs/hardhat-ethers");
const { API_URL, PRIVATE_KEY } = process.env;

const accounts = {
  mnemonic: "test test test test test test test test test test test junk",
};

module.exports = {
  solidity: "0.8.20",
  networks: {
    hardhat: {
      forking: {
        url: "https://mainnet.infura.io/v3/dd7731197e7f4a379df05e7bb2da9485"
      }
    },
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./src/artifacts"
  },
};