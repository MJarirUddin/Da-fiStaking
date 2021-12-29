/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { SetupToken, SetupTokenInterface } from "../SetupToken";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "getBalanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "bal",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "mintTo",
        type: "address",
      },
    ],
    name: "mintToAddr",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "token",
    outputs: [
      {
        internalType: "contract TestERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405161001d9061005f565b604051809103906000f080158015610039573d6000803e3d6000fd5b50600080546001600160a01b0319166001600160a01b039290921691909117905561006c565b6107cc806102aa83390190565b61022f8061007b6000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c806315bfe4e1146100465780639b96eece1461005b578063fc0c546a14610084575b600080fd5b6100596100543660046101a6565b610099565b005b61006e6100693660046101a6565b610110565b60405161007b9190610219565b60405180910390f35b61008c610197565b60405161007b91906101ec565b600054604051634e6ec24760e01b81526001600160a01b0390911690634e6ec247906100db9084906f4b3b4ca85a86c47a098a22400000000090600401610200565b600060405180830381600087803b1580156100f557600080fd5b505af1158015610109573d6000803e3d6000fd5b5050505050565b600080546040516370a0823160e01b81526001600160a01b03909116906370a08231906101419085906004016101ec565b60206040518083038186803b15801561015957600080fd5b505afa15801561016d573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061019191906101d4565b92915050565b6000546001600160a01b031681565b6000602082840312156101b7578081fd5b81356001600160a01b03811681146101cd578182fd5b9392505050565b6000602082840312156101e5578081fd5b5051919050565b6001600160a01b0391909116815260200190565b6001600160a01b03929092168252602082015260400190565b9081526020019056fea164736f6c6343000800000a608060405234801561001057600080fd5b506107ac806100206000396000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c80634e6ec2471161005b5780634e6ec247146100d357806370a08231146100e8578063a9059cbb146100fb578063dd62ed3e1461010e5761007d565b8063095ea7b31461008257806318160ddd146100ab57806323b872dd146100c0575b600080fd5b610095610090366004610527565b610121565b6040516100a29190610550565b60405180910390f35b6100b3610137565b6040516100a29190610772565b6100956100ce3660046104ec565b61013d565b6100e66100e1366004610527565b6101af565b005b6100b36100f6366004610499565b610263565b610095610109366004610527565b610282565b6100b361011c3660046104ba565b61028f565b600061012e3384846102ba565b50600192915050565b60025490565b600061014a84848461036e565b6001600160a01b0384166000908152600160209081526040808320338452909152902054828110156101975760405162461bcd60e51b815260040161018e9061063d565b60405180910390fd5b6101a485338584036102ba565b506001949350505050565b6001600160a01b0382166101d55760405162461bcd60e51b815260040161018e9061073b565b80600260008282546101e7919061077b565b90915550506001600160a01b0382166000908152602081905260408120805483929061021490849061077b565b90915550506040516001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90610257908590610772565b60405180910390a35050565b6001600160a01b0381166000908152602081905260409020545b919050565b600061012e33848461036e565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6001600160a01b0383166102e05760405162461bcd60e51b815260040161018e906106f7565b6001600160a01b0382166103065760405162461bcd60e51b815260040161018e9061059e565b6001600160a01b0380841660008181526001602090815260408083209487168084529490915290819020849055517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92590610361908590610772565b60405180910390a3505050565b6001600160a01b0383166103945760405162461bcd60e51b815260040161018e9061069a565b6001600160a01b0382166103ba5760405162461bcd60e51b815260040161018e9061055b565b6001600160a01b038316600090815260208190526040902054818110156103f35760405162461bcd60e51b815260040161018e906105e0565b6001600160a01b0380851660009081526020819052604080822085850390559185168152908120805484929061042a90849061077b565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516104749190610772565b60405180910390a350505050565b80356001600160a01b038116811461027d57600080fd5b6000602082840312156104aa578081fd5b6104b382610482565b9392505050565b600080604083850312156104cc578081fd5b6104d583610482565b91506104e360208401610482565b90509250929050565b600080600060608486031215610500578081fd5b61050984610482565b925061051760208501610482565b9150604084013590509250925092565b60008060408385031215610539578182fd5b61054283610482565b946020939093013593505050565b901515815260200190565b60208082526023908201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260408201526265737360e81b606082015260800190565b60208082526022908201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604082015261737360f01b606082015260800190565b60208082526026908201527f45524332303a207472616e7366657220616d6f756e742065786365656473206260408201527f616c616e63650000000000000000000000000000000000000000000000000000606082015260800190565b60208082526028908201527f45524332303a207472616e7366657220616d6f756e742065786365656473206160408201527f6c6c6f77616e6365000000000000000000000000000000000000000000000000606082015260800190565b60208082526025908201527f45524332303a207472616e736665722066726f6d20746865207a65726f20616460408201527f6472657373000000000000000000000000000000000000000000000000000000606082015260800190565b60208082526024908201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646040820152637265737360e01b606082015260800190565b6020808252601f908201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604082015260600190565b90815260200190565b6000821982111561079a57634e487b7160e01b81526011600452602481fd5b50019056fea164736f6c6343000800000a";

export class SetupToken__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<SetupToken> {
    return super.deploy(overrides || {}) as Promise<SetupToken>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): SetupToken {
    return super.attach(address) as SetupToken;
  }
  connect(signer: Signer): SetupToken__factory {
    return super.connect(signer) as SetupToken__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SetupTokenInterface {
    return new utils.Interface(_abi) as SetupTokenInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SetupToken {
    return new Contract(address, _abi, signerOrProvider) as SetupToken;
  }
}