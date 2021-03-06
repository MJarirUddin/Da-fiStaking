/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { TVLFeed, TVLFeedInterface } from "../TVLFeed";

const _abi = [
  {
    inputs: [],
    name: "getTheTVL",
    outputs: [
      {
        internalType: "uint256",
        name: "randomTVLFeed",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x6080604052348015600f57600080fd5b5060638061001e6000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c8063112e736f14602d575b600080fd5b60336047565b604051603e9190604d565b60405180910390f35b61011690565b9081526020019056fea164736f6c6343000800000a";

export class TVLFeed__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<TVLFeed> {
    return super.deploy(overrides || {}) as Promise<TVLFeed>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): TVLFeed {
    return super.attach(address) as TVLFeed;
  }
  connect(signer: Signer): TVLFeed__factory {
    return super.connect(signer) as TVLFeed__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TVLFeedInterface {
    return new utils.Interface(_abi) as TVLFeedInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TVLFeed {
    return new Contract(address, _abi, signerOrProvider) as TVLFeed;
  }
}
