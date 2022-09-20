import { Overrides } from 'ethers';

export const GAS_LIMIT = 10000000;

export const transactionOverrides: Overrides = {
  gasLimit: GAS_LIMIT,
};
