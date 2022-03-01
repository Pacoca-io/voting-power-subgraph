require("dotenv").config();
require("@nomiclabs/hardhat-waffle");

/**
 * @type import('hardhat/config').HardhatUserConfig
 */

const getVersionBase = (version) => ({
  version,
  settings: {
    optimizer: {
      enabled: true,
      runs: 800,
    },
  },
});

module.exports = {
  solidity: {
    compilers: ["0.6.12", "0.8.9"].map(getVersionBase),
  },
  networks: {
    hardhat: {
      forking: {
        url: process.env.BSC_RPC_URL,
      },
    },
  },
};
