const ganache = require('ganache-core');

const providerUrl = process.env.MAINNET_PROVIDER_URL;
const developmentMnemonic = process.env.DEV_ETH_MNEMONIC;

if (!providerUrl) {
  console.error('Missing JSON RPC provider URL as environment variable `MAINNET_PROVIDER_URL`');
  process.exit(1);
}

if (!developmentMnemonic) {
  console.error('Missing development Ethereum account mnemonic as environment variable `DEV_ETH_MNEMONIC`');
  process.exit(1);
}

const server = ganache.server({
  fork: providerUrl,
  network_id: 1,
  default_balance_ether: 10000,
  mnemonic: developmentMnemonic,
  gasPrice: 0,
  unlocked_accounts: [
    "0xccF4429DB6322D5C611ee964527D42E5d685DD6a", //cWBTC
    "0x70e36f6bf80a52b3b46b3af8e106cc0ed743e8e4", //cCOMP
    "0x39AA39c021dfbaE8faC545936693aC917d5E7563", //cUSDC
    "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643", //cDAI
    "0xf650C3d88D12dB855b8bf7D11Be6C55A4e07dCC9", //cUSDT
    "0x6C8c6b02E7b2BE14d4fA6022Dfd6d75921D90E4E", //cBAT
    "0x4Ddc2D193948926D02f9B1fE9e1daa0718270ED5", //cETH
    "0x35a18000230da775cac24873d00ff85bccded550", //cUNI
    "0xF5DCe57282A584D2746FaF1593d3121Fcac444dC", //cSAI
    "0x158079Ee67Fce2f58472A96584A73C7Ab9AC95c1", //cREP
    "0xB3319f5D18Bc0D84dD1b4825Dcde5d5f7266d407", //cZRX
  ],
});

server.listen(8545, (err, blockchain) => console.error);
