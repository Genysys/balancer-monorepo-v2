Deploy factories:

```
yarn hardhat deploy --id 20210418-authorizer --network axon
yarn hardhat deploy --id 20210418-vault --network axon
yarn hardhat deploy --id 20210418-weighted-pool --network axon
yarn hardhat deploy --id 20210624-stable-pool --network axon
```

Deploy Stable Pool:
```
yarn hardhat run cli/index.ts --network axon
```

Axon network config for hardhat (eg. `~/.hardhat/networks.json`):
```
{
  // ...
  {
    // ...
    "axon": {
      "url": "http://34.204.204.212:8000"
    },
    "godwoken-testnet": {
      "url": "https://godwoken-testnet-v1.ckbapp.dev"
    }
  },
  "defaultConfig": {
    "gasPrice": "auto",
    "gasMultiplier": 1,
    "accounts": {
      "mnemonic": "test test test test test test test test test test test junk"
    }
  }
};

- Deploy tokens using remix

```