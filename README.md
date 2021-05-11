# Ganache Bug

Can't seem to run Compound cToken `exchangeRateCurrent` ([this](https://github.com/compound-finance/compound-protocol/blob/master/contracts/CToken.sol#L318)) without hitting `revert re-entered` when forking mainnet. Using Node.js 12.14.1. MacBook Pro (15-inch, 2019) on macOS Big Sur 11.3 (20E232).

For `ganache-core` setup, see `scripts/` folder.

Environment variables:

```bash
MAINNET_PROVIDER_URL="https://mainnet.infura.io/v3/YOUR-PROJECT-ID"
DEV_ETH_MNEMONIC="earn debate...."
```

Run
```bash
npm install
npm test
```