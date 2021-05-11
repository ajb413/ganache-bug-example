# Ganache Bug

Can't seem to run `exchangeRateCurrent` without hitting `revert re-entered`.

Environment variables:

```bash
MAINNET_PROVIDER_URL="https://mainnet.infura.io/v3/YOUR-PROJECT-ID"
DEV_ETH_MNEMONIC="earn debate...."
```

Run
```bash
yarn install
yarn test
```