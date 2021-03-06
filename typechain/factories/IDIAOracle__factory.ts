/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IDIAOracle, IDIAOracleInterface } from "../IDIAOracle";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "key",
        type: "string",
      },
    ],
    name: "getValue",
    outputs: [
      {
        internalType: "uint128",
        name: "",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "",
        type: "uint128",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class IDIAOracle__factory {
  static readonly abi = _abi;
  static createInterface(): IDIAOracleInterface {
    return new utils.Interface(_abi) as IDIAOracleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IDIAOracle {
    return new Contract(address, _abi, signerOrProvider) as IDIAOracle;
  }
}
