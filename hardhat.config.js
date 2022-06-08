require("dotenv").config();

require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-waffle");
require("hardhat-deploy");
require("hardhat-gas-reporter");
require("solidity-coverage");
require("hardhat-contract-sizer");

const RINKEBY_RPC_URL = process.env.RINKEBY_RPC_URL || "https://eth-rinkeby.alchemyapi.io/v2/7TIpeGvHC8jS_ckyP8h5rDTUg7KOjcm3"
const PRIVATE_KEY = process.env.PRIVATE_KEY || "27cbcb99da75e09d0e8167440d29009fb86728ecae1e3d2bea653429b0f7fafe"
const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY || "EXFA8XTEWDMR95YBUGR93MB76YMC4J7ED6"
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || "c90a6685-79f0-428d-a2ba-1b67a4cf8221"

module.exports = {
  solidity: {
    compilers: [{ version: "0.8.8" }, { version: "0.6.6" }],
  },

  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 31337,
      blockConfirmation: 1,
    },
    rinkeby: {
      url: RINKEBY_RPC_URL,
      accounts: [PRIVATE_KEY],
      chainId: 4,
      blockConfirmation: 6,
    },
  },
  gasReporter: {
    enabled: false,
    outputFile: "gas-report.txt",
    noColors: true,
    currency: "USD",
    //coinmarketcap: COINMARKETCAP_API_KEY, //
    //token: "MATIC",
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
  namedAccounts: {
    deployer: {
      default: 0,
    },
    player: {
      default: 1,
    },
  },
};
