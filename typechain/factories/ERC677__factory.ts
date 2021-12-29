/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ERC677, ERC677Interface } from "../ERC677";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
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
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burnFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
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
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "transferAndCall",
    outputs: [
      {
        internalType: "bool",
        name: "success",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620013a1380380620013a183398101604081905262000034916200022f565b8151829082906200004d906003906020850190620000de565b50805162000063906004906020840190620000de565b505050620000806200007a6200008860201b60201c565b6200008c565b5050620002e9565b3390565b600580546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b828054620000ec9062000296565b90600052602060002090601f0160209004810192826200011057600085556200015b565b82601f106200012b57805160ff19168380011785556200015b565b828001600101855582156200015b579182015b828111156200015b5782518255916020019190600101906200013e565b50620001699291506200016d565b5090565b5b808211156200016957600081556001016200016e565b600082601f83011262000195578081fd5b81516001600160401b0380821115620001b257620001b2620002d3565b6040516020601f8401601f1916820181018381118382101715620001da57620001da620002d3565b6040528382528584018101871015620001f1578485fd5b8492505b83831015620002145785830181015182840182015291820191620001f5565b838311156200022557848185840101525b5095945050505050565b6000806040838503121562000242578182fd5b82516001600160401b038082111562000259578384fd5b620002678683870162000184565b935060208501519150808211156200027d578283fd5b506200028c8582860162000184565b9150509250929050565b600281046001821680620002ab57607f821691505b60208210811415620002cd57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052604160045260246000fd5b6110a880620002f96000396000f3fe608060405234801561001057600080fd5b506004361061011b5760003560e01c806370a08231116100b257806395d89b4111610081578063a9059cbb11610066578063a9059cbb14610234578063dd62ed3e14610247578063f2fde38b1461025a5761011b565b806395d89b4114610219578063a457c2d7146102215761011b565b806370a08231146101d4578063715018a6146101e757806379cc6790146101f15780638da5cb5b146102045761011b565b8063313ce567116100ee578063313ce56714610186578063395093511461019b5780634000aea0146101ae57806342966c68146101c15761011b565b806306fdde0314610120578063095ea7b31461013e57806318160ddd1461015e57806323b872dd14610173575b600080fd5b61012861026d565b6040516101359190610c45565b60405180910390f35b61015161014c366004610aac565b6102ff565b6040516101359190610c3a565b61016661031c565b6040516101359190610fee565b610151610181366004610a71565b610322565b61018e6103c2565b6040516101359190610ff7565b6101516101a9366004610aac565b6103c7565b6101516101bc366004610ad5565b610416565b6101516101cf366004610b92565b610451565b6101666101e2366004610a1e565b61046d565b6101ef610488565b005b6101ef6101ff366004610aac565b6104d3565b61020c610528565b6040516101359190610bf5565b610128610537565b61015161022f366004610aac565b610546565b610151610242366004610aac565b6105b7565b610166610255366004610a3f565b6105cb565b6101ef610268366004610a1e565b6105f6565b60606003805461027c90611034565b80601f01602080910402602001604051908101604052809291908181526020018280546102a890611034565b80156102f55780601f106102ca576101008083540402835291602001916102f5565b820191906000526020600020905b8154815290600101906020018083116102d857829003601f168201915b5050505050905090565b600061031361030c610667565b848461066b565b50600192915050565b60025490565b600061032f84848461071f565b6001600160a01b038416600090815260016020526040812081610350610667565b6001600160a01b03166001600160a01b031681526020019081526020016000205490508281101561039c5760405162461bcd60e51b815260040161039390610dd9565b60405180910390fd5b6103b7856103a8610667565b6103b2868561101d565b61066b565b506001949350505050565b601290565b60006103136103d4610667565b8484600160006103e2610667565b6001600160a01b03908116825260208083019390935260409182016000908120918b16815292529020546103b29190611005565b600061042284846105b7565b5061042e33858561071f565b61043784610847565b156104475761044784848461084d565b5060019392505050565b600061046461045e610667565b836108b7565b5060015b919050565b6001600160a01b031660009081526020819052604090205490565b610490610667565b6001600160a01b03166104a1610528565b6001600160a01b0316146104c75760405162461bcd60e51b815260040161039390610e36565b6104d1600061099d565b565b60006104e183610255610667565b9050818110156105035760405162461bcd60e51b815260040161039390610e6b565b6105198361050f610667565b6103b2858561101d565b61052383836108b7565b505050565b6005546001600160a01b031690565b60606004805461027c90611034565b60008060016000610555610667565b6001600160a01b03908116825260208083019390935260409182016000908120918816815292529020549050828110156105a15760405162461bcd60e51b815260040161039390610f91565b6104476105ac610667565b856103b2868561101d565b60006103136105c4610667565b848461071f565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6105fe610667565b6001600160a01b031661060f610528565b6001600160a01b0316146106355760405162461bcd60e51b815260040161039390610e36565b6001600160a01b03811661065b5760405162461bcd60e51b815260040161039390610cdd565b6106648161099d565b50565b3390565b6001600160a01b0383166106915760405162461bcd60e51b815260040161039390610f4d565b6001600160a01b0382166106b75760405162461bcd60e51b815260040161039390610d3a565b6001600160a01b0380841660008181526001602090815260408083209487168084529490915290819020849055517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92590610712908590610fee565b60405180910390a3505050565b6001600160a01b0383166107455760405162461bcd60e51b815260040161039390610ef0565b6001600160a01b03821661076b5760405162461bcd60e51b815260040161039390610c58565b610776838383610523565b6001600160a01b038316600090815260208190526040902054818110156107af5760405162461bcd60e51b815260040161039390610d7c565b6107b9828261101d565b6001600160a01b0380861660009081526020819052604080822093909355908516815290812080548492906107ef908490611005565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516108399190610fee565b60405180910390a350505050565b3b151590565b604051635260769b60e11b815283906001600160a01b0382169063a4c0ed369061087f90339087908790600401610c09565b600060405180830381600087803b15801561089957600080fd5b505af11580156108ad573d6000803e3d6000fd5b5050505050505050565b6001600160a01b0382166108dd5760405162461bcd60e51b815260040161039390610eaf565b6108e982600083610523565b6001600160a01b038216600090815260208190526040902054818110156109225760405162461bcd60e51b815260040161039390610c9b565b61092c828261101d565b6001600160a01b0384166000908152602081905260408120919091556002805484929061095a90849061101d565b90915550506040516000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90610712908690610fee565b600580546001600160a01b038381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b80356001600160a01b038116811461046857600080fd5b600060208284031215610a2f578081fd5b610a3882610a07565b9392505050565b60008060408385031215610a51578081fd5b610a5a83610a07565b9150610a6860208401610a07565b90509250929050565b600080600060608486031215610a85578081fd5b610a8e84610a07565b9250610a9c60208501610a07565b9150604084013590509250925092565b60008060408385031215610abe578182fd5b610ac783610a07565b946020939093013593505050565b600080600060608486031215610ae9578283fd5b610af284610a07565b92506020808501359250604085013567ffffffffffffffff80821115610b16578384fd5b818701915087601f830112610b29578384fd5b813581811115610b3b57610b3b611085565b604051601f8201601f1916810185018381118282101715610b5e57610b5e611085565b60405281815283820185018a1015610b74578586fd5b81858501868301378585838301015280955050505050509250925092565b600060208284031215610ba3578081fd5b5035919050565b60008151808452815b81811015610bcf57602081850181015186830182015201610bb3565b81811115610be05782602083870101525b50601f01601f19169290920160200192915050565b6001600160a01b0391909116815260200190565b60006001600160a01b038516825283602083015260606040830152610c316060830184610baa565b95945050505050565b901515815260200190565b600060208252610a386020830184610baa565b60208082526023908201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260408201526265737360e81b606082015260800190565b60208082526022908201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604082015261636560f01b606082015260800190565b60208082526026908201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160408201527f6464726573730000000000000000000000000000000000000000000000000000606082015260800190565b60208082526022908201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604082015261737360f01b606082015260800190565b60208082526026908201527f45524332303a207472616e7366657220616d6f756e742065786365656473206260408201527f616c616e63650000000000000000000000000000000000000000000000000000606082015260800190565b60208082526028908201527f45524332303a207472616e7366657220616d6f756e742065786365656473206160408201527f6c6c6f77616e6365000000000000000000000000000000000000000000000000606082015260800190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b60208082526024908201527f45524332303a206275726e20616d6f756e74206578636565647320616c6c6f77604082015263616e636560e01b606082015260800190565b60208082526021908201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736040820152607360f81b606082015260800190565b60208082526025908201527f45524332303a207472616e736665722066726f6d20746865207a65726f20616460408201527f6472657373000000000000000000000000000000000000000000000000000000606082015260800190565b60208082526024908201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646040820152637265737360e01b606082015260800190565b60208082526025908201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760408201527f207a65726f000000000000000000000000000000000000000000000000000000606082015260800190565b90815260200190565b60ff91909116815260200190565b600082198211156110185761101861106f565b500190565b60008282101561102f5761102f61106f565b500390565b60028104600182168061104857607f821691505b6020821081141561106957634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fdfea164736f6c6343000800000a";

export class ERC677__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    name: string,
    symbol: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ERC677> {
    return super.deploy(name, symbol, overrides || {}) as Promise<ERC677>;
  }
  getDeployTransaction(
    name: string,
    symbol: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(name, symbol, overrides || {});
  }
  attach(address: string): ERC677 {
    return super.attach(address) as ERC677;
  }
  connect(signer: Signer): ERC677__factory {
    return super.connect(signer) as ERC677__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC677Interface {
    return new utils.Interface(_abi) as ERC677Interface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): ERC677 {
    return new Contract(address, _abi, signerOrProvider) as ERC677;
  }
}
