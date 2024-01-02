export const COLLECTION_LENGTH = 7;
export const INFURA_API = "https://bronze-qualified-limpet-836.mypinata.cloud/ipfs/QmcfH4385ZXD9w5SosUKjCZjxNfh2boFTj74oXbY33ioqr/metadata/";
export const FORGER_ADDRESS = "0xc7c34897F9Ae55e364F90Cb06E09a4c3778e0533";
export const COLLECTION_ADDRESS = "0xACa1b65cc7713DF5c1Fc96d4eC018DA8f6c8988c";
export const COOLDOWN = 60000;
export const COOLDOWN_TICK = 1000;
export const POLYGON_API="https://api-testnet.polygonscan.com/api"; 
export const MUMBAI_ID_HEX = "0x13881";
export const POLYGON_DECIMALS = 18;
export const OPENSEA_URL = "https://testnets.opensea.io/"

// Notification message
export const MINT_SUCCESS_MSG = "Item minted successfully!";
export const MINT_ERROR_MSG = "Not enough items to mint!";
export const BURN_SUCCESS_MSG = "Item burned successfully!";
export const BURN_ERROR_MSG = "Failure to burn item!";
export const TRADE_SUCCESS_MSG = "Item traded successfully!";
export const TRADE_ERROR_MSG = "Failure to trade item!";

export const POLYGON_MUMBAI_NETWORK = {
    chainId: MUMBAI_ID_HEX,
    chainName: "Mumbai Testnet",
    rpcUrls: ["https://rpc-mumbai.maticvigil.com"],
    nativeCurrency: {
      name: "Polygon",
      symbol: "MATIC",
      decimals: POLYGON_DECIMALS,
    },
    blockExplorerUrls: ["https://mumbai.polygonscan.com"]
};
