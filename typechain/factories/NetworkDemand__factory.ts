/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { NetworkDemand, NetworkDemandInterface } from "../NetworkDemand";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "_token",
        type: "address",
      },
      {
        internalType: "contract IPriceFeeds",
        name: "_priceFeeds",
        type: "address",
      },
      {
        internalType: "contract ITVLFeeds",
        name: "_tvlFeeds",
        type: "address",
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
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "addWhitelist",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "calculateNetworkDemand",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getCurrentPrice",
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
    inputs: [],
    name: "getIndexToUpdate",
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
    inputs: [],
    name: "getNoOfPricese",
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
    inputs: [],
    name: "getPriceCurrent",
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
    inputs: [],
    name: "getPricePercentage",
    outputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getTVLCurrent",
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
    inputs: [],
    name: "getTVLPercentage",
    outputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getTargetPrice",
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
    inputs: [],
    name: "getTargetTVL",
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
    inputs: [],
    name: "getTolerance",
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
        name: "",
        type: "uint256",
      },
    ],
    name: "lastPrices",
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
    inputs: [],
    name: "networkDemand",
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
    name: "priceFeeds",
    outputs: [
      {
        internalType: "contract IPriceFeeds",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
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
    name: "removeWhitelist",
    outputs: [],
    stateMutability: "nonpayable",
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
    inputs: [
      {
        internalType: "uint256",
        name: "_currentPrice",
        type: "uint256",
      },
    ],
    name: "setCurrentPrice",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "_IndexToUpdate",
        type: "uint8",
      },
    ],
    name: "setIndexToUpdate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "_noOfPrices",
        type: "uint8",
      },
    ],
    name: "setNoOfPrices",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_pricePercentage",
        type: "uint16",
      },
    ],
    name: "setPricePercentage",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_tvlPercentage",
        type: "uint16",
      },
    ],
    name: "setTVLPercentage",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_targetPrice",
        type: "uint256",
      },
    ],
    name: "setTargetPrice",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_targetTVL",
        type: "uint256",
      },
    ],
    name: "setTargetTVL",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_tolerance",
        type: "uint256",
      },
    ],
    name: "setTolerance",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "token",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
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
  {
    inputs: [],
    name: "tvlFeeds",
    outputs: [
      {
        internalType: "contract ITVLFeeds",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IPriceFeeds",
        name: "newPriceFeed",
        type: "address",
      },
    ],
    name: "updatePriceFeed",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract ITVLFeeds",
        name: "newTVLFeed",
        type: "address",
      },
    ],
    name: "updateTVLFeed",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "whitelists",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60a06040523480156200001157600080fd5b506040516200262d3803806200262d833981810160405281019062000037919062000282565b620000576200004b6200017160201b60201c565b6200017960201b60201c565b8273ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff1660601b8152505081600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001600a60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555050505062000396565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b6000815190506200024e8162000348565b92915050565b600081519050620002658162000362565b92915050565b6000815190506200027c816200037c565b92915050565b6000806000606084860312156200029857600080fd5b6000620002a8868287016200023d565b9350506020620002bb8682870162000254565b9250506040620002ce868287016200026b565b9150509250925092565b6000620002e58262000328565b9050919050565b6000620002f982620002d8565b9050919050565b60006200030d82620002d8565b9050919050565b60006200032182620002d8565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6200035381620002ec565b81146200035f57600080fd5b50565b6200036d8162000300565b81146200037957600080fd5b50565b620003878162000314565b81146200039357600080fd5b50565b60805160601c612278620003b5600039600061159301526122786000f3fe608060405234801561001057600080fd5b50600436106101ef5760003560e01c806395877f781161010f578063dda10978116100a2578063f2fde38b11610071578063f2fde38b14610536578063f80f5dd514610552578063f86f697b1461056e578063fc0c546a1461058c576101ef565b8063dda10978146104c4578063eb91d37e146104e0578063f004b1a2146104fe578063f063e09b1461051a576101ef565b8063bd01bb32116100de578063bd01bb321461044e578063be6ca7711461046c578063bf04b6d61461048a578063d6e00dbc146104a8576101ef565b806395877f78146103d85780639cb20ee7146103f4578063a505e2ee14610412578063a7941fb714610430576101ef565b806351ec60571161018757806378c8cda71161015657806378c8cda71461036457806378d849ed1461038057806380cdf53d1461039e5780638da5cb5b146103ba576101ef565b806351ec60571461030457806358736116146103205780636a64eff81461033e578063715018a61461035a576101ef565b80631e7be210116101c35780631e7be2101461026a5780633245dea51461029a5780633473fbe5146102ca5780633c5fd982146102e8576101ef565b806270a6c3146101f45780630426ab151461021257806318b20071146102305780631b0ad1951461024c575b600080fd5b6101fc6105aa565b6040516102099190611e98565b60405180910390f35b61021a6105b4565b6040516102279190611e7d565b60405180910390f35b61024a60048036038101906102459190611a8b565b6105cc565b005b610254610662565b6040516102619190611eb3565b60405180910390f35b610284600480360381019061027f91906119e7565b610679565b6040516102919190611d71565b60405180910390f35b6102b460048036038101906102af9190611a8b565b610699565b6040516102c19190611e98565b60405180910390f35b6102d26106bd565b6040516102df9190611e98565b60405180910390f35b61030260048036038101906102fd9190611a8b565b610764565b005b61031e60048036038101906103199190611add565b6107fa565b005b6103286108a4565b6040516103359190611e98565b60405180910390f35b61035860048036038101906103539190611a8b565b6108aa565b005b610362610940565b005b61037e600480360381019061037991906119e7565b6109c8565b005b610388610b65565b6040516103959190611da7565b60405180910390f35b6103b860048036038101906103b39190611a39565b610b8b565b005b6103c2610c5b565b6040516103cf9190611d56565b60405180910390f35b6103f260048036038101906103ed9190611a10565b610c84565b005b6103fc610d54565b6040516104099190611e98565b60405180910390f35b61041a610f40565b6040516104279190611dc2565b60405180910390f35b610438610f66565b6040516104459190611e98565b60405180910390f35b61045661100d565b6040516104639190611e98565b60405180910390f35b610474611017565b6040516104819190611e7d565b60405180910390f35b61049261102f565b60405161049f9190611e98565b60405180910390f35b6104c260048036038101906104bd9190611a8b565b611039565b005b6104de60048036038101906104d99190611a62565b6110cf565b005b6104e86111c6565b6040516104f59190611e98565b60405180910390f35b61051860048036038101906105139190611a62565b6111d0565b005b610534600480360381019061052f9190611add565b6112c7565b005b610550600480360381019061054b91906119e7565b611371565b005b61056c600480360381019061056791906119e7565b611469565b005b61057661157a565b6040516105839190611eb3565b60405180910390f35b610594611591565b6040516105a19190611d8c565b60405180910390f35b6000600554905090565b6000600460149054906101000a900461ffff16905090565b600a60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16610658576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161064f90611ddd565b60405180910390fd5b8060088190555050565b6000600760019054906101000a900460ff16905090565b600a6020528060005260406000206000915054906101000a900460ff1681565b600681815481106106a957600080fd5b906000526020600020016000915090505481565b6000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16638c3c9a556040518163ffffffff1660e01b815260040160206040518083038186803b15801561072757600080fd5b505afa15801561073b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061075f9190611ab4565b905090565b600a60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff166107f0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107e790611ddd565b60405180910390fd5b8060058190555050565b600a60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16610886576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161087d90611ddd565b60405180910390fd5b80600760016101000a81548160ff021916908360ff16021790555050565b60095481565b600a60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16610936576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161092d90611ddd565b60405180910390fd5b8060018190555050565b6109486115b5565b73ffffffffffffffffffffffffffffffffffffffff16610966610c5b565b73ffffffffffffffffffffffffffffffffffffffff16146109bc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109b390611e5d565b60405180910390fd5b6109c660006115bd565b565b6109d06115b5565b73ffffffffffffffffffffffffffffffffffffffff166109ee610c5b565b73ffffffffffffffffffffffffffffffffffffffff1614610a44576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a3b90611e5d565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610a7e57600080fd5b600a60008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16610b0a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b0190611e3d565b60405180910390fd5b6000600a60008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555050565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600a60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16610c17576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c0e90611ddd565b60405180910390fd5b80600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600a60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16610d10576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d0790611ddd565b60405180910390fd5b80600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6000806000600460149054906101000a900461ffff1661ffff1614610dc057600460149054906101000a900461ffff1661ffff16600154620f424063ffffffff16610d9d611681565b610da79190611f66565b610db19190611f35565b610dbb9190611f66565b610dc3565b60005b9050600080600460169054906101000a900461ffff1661ffff1614610ec757600460169054906101000a900461ffff1661ffff16600254620f424063ffffffff16600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663112e736f6040518163ffffffff1660e01b815260040160206040518083038186803b158015610e6c57600080fd5b505afa158015610e80573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ea49190611ab4565b610eae9190611f66565b610eb89190611f35565b610ec29190611f66565b610eca565b60005b90506000606460ff168284610edf9190611edf565b610ee99190611f35565b90506298968063ffffffff16811015610f0d576298968063ffffffff169050610f2e565b6305f5e10063ffffffff16811115610f2d576305f5e10063ffffffff1690505b5b80600981905550600954935050505090565b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663112e736f6040518163ffffffff1660e01b815260040160206040518083038186803b158015610fd057600080fd5b505afa158015610fe4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110089190611ab4565b905090565b6000600154905090565b6000600460169054906101000a900461ffff16905090565b6000600254905090565b600a60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff166110c5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110bc90611ddd565b60405180910390fd5b8060028190555050565b600a60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1661115b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161115290611ddd565b60405180910390fd5b806127108161ffff1611156111a5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161119c90611e1d565b60405180910390fd5b81600460146101000a81548161ffff021916908361ffff1602179055505050565b6000600854905090565b600a60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1661125c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161125390611ddd565b60405180910390fd5b806127108161ffff1611156112a6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161129d90611e1d565b60405180910390fd5b81600460166101000a81548161ffff021916908361ffff1602179055505050565b600a60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16611353576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161134a90611ddd565b60405180910390fd5b80600760006101000a81548160ff021916908360ff16021790555050565b6113796115b5565b73ffffffffffffffffffffffffffffffffffffffff16611397610c5b565b73ffffffffffffffffffffffffffffffffffffffff16146113ed576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016113e490611e5d565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141561145d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161145490611dfd565b60405180910390fd5b611466816115bd565b50565b6114716115b5565b73ffffffffffffffffffffffffffffffffffffffff1661148f610c5b565b73ffffffffffffffffffffffffffffffffffffffff16146114e5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016114dc90611e5d565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141561151f57600080fd5b6001600a60008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555050565b6000600760009054906101000a900460ff16905090565b7f000000000000000000000000000000000000000000000000000000000000000081565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600080600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16638c3c9a556040518163ffffffff1660e01b815260040160206040518083038186803b1580156116ec57600080fd5b505afa158015611700573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117249190611ab4565b905060006008541461177857600060085482101561174f578160085461174a9190611fc0565b61175e565b6008548261175d9190611fc0565b5b90506005548111156117765760085492505050611951565b505b600760009054906101000a900460ff1660ff1660068054905010156117c55760068190806001815401808255809150506001900390600052602060002001600090919091909150556118a2565b806006600760019054906101000a900460ff1660ff1681548110611812577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b90600052602060002001819055506007600181819054906101000a900460ff168092919061183f90612130565b91906101000a81548160ff021916908360ff16021790555050600760009054906101000a900460ff1660ff16600760019054906101000a900460ff1660ff1614156118a1576000600760016101000a81548160ff021916908360ff1602179055505b5b600080600090505b60068054905081101561191c57600681815481106118f1577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9060005260206000200154826119079190611edf565b91508080611914906120e7565b9150506118aa565b50600060068054905011611931576000611943565b600680549050816119429190611f35565b5b600881905550600854925050505b90565b600081359050611963816121b8565b92915050565b600081359050611978816121cf565b92915050565b60008135905061198d816121e6565b92915050565b6000813590506119a2816121fd565b92915050565b6000813590506119b781612214565b92915050565b6000815190506119cc81612214565b92915050565b6000813590506119e18161222b565b92915050565b6000602082840312156119f957600080fd5b6000611a0784828501611954565b91505092915050565b600060208284031215611a2257600080fd5b6000611a3084828501611969565b91505092915050565b600060208284031215611a4b57600080fd5b6000611a598482850161197e565b91505092915050565b600060208284031215611a7457600080fd5b6000611a8284828501611993565b91505092915050565b600060208284031215611a9d57600080fd5b6000611aab848285016119a8565b91505092915050565b600060208284031215611ac657600080fd5b6000611ad4848285016119bd565b91505092915050565b600060208284031215611aef57600080fd5b6000611afd848285016119d2565b91505092915050565b611b0f81611ff4565b82525050565b611b1e81612006565b82525050565b611b2d8161207b565b82525050565b611b3c8161209f565b82525050565b611b4b816120c3565b82525050565b6000611b5e602c83611ece565b91507f4e6f7420617574686f72697573656420746f2061636365737320746865206e6560008301527f74776f726b2064656d616e6400000000000000000000000000000000000000006020830152604082019050919050565b6000611bc4602683611ece565b91507f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008301527f64647265737300000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000611c2a602883611ece565b91507f50657263656e746167652063616e206f6e6c79206265206265747765656e203060008301527f20616e64203130300000000000000000000000000000000000000000000000006020830152604082019050919050565b6000611c90602183611ece565b91507f4163636f756e7420646f65736e7420657869737420696e2077686974656c697360008301527f74000000000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000611cf6602083611ece565b91507f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726000830152602082019050919050565b611d3281612036565b82525050565b611d4181612064565b82525050565b611d508161206e565b82525050565b6000602082019050611d6b6000830184611b06565b92915050565b6000602082019050611d866000830184611b15565b92915050565b6000602082019050611da16000830184611b24565b92915050565b6000602082019050611dbc6000830184611b33565b92915050565b6000602082019050611dd76000830184611b42565b92915050565b60006020820190508181036000830152611df681611b51565b9050919050565b60006020820190508181036000830152611e1681611bb7565b9050919050565b60006020820190508181036000830152611e3681611c1d565b9050919050565b60006020820190508181036000830152611e5681611c83565b9050919050565b60006020820190508181036000830152611e7681611ce9565b9050919050565b6000602082019050611e926000830184611d29565b92915050565b6000602082019050611ead6000830184611d38565b92915050565b6000602082019050611ec86000830184611d47565b92915050565b600082825260208201905092915050565b6000611eea82612064565b9150611ef583612064565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115611f2a57611f2961215a565b5b828201905092915050565b6000611f4082612064565b9150611f4b83612064565b925082611f5b57611f5a612189565b5b828204905092915050565b6000611f7182612064565b9150611f7c83612064565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615611fb557611fb461215a565b5b828202905092915050565b6000611fcb82612064565b9150611fd683612064565b925082821015611fe957611fe861215a565b5b828203905092915050565b6000611fff82612044565b9050919050565b60008115159050919050565b600061201d82611ff4565b9050919050565b600061202f82611ff4565b9050919050565b600061ffff82169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b60006120868261208d565b9050919050565b600061209882612044565b9050919050565b60006120aa826120b1565b9050919050565b60006120bc82612044565b9050919050565b60006120ce826120d5565b9050919050565b60006120e082612044565b9050919050565b60006120f282612064565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156121255761212461215a565b5b600182019050919050565b600061213b8261206e565b915060ff82141561214f5761214e61215a565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6121c181611ff4565b81146121cc57600080fd5b50565b6121d881612012565b81146121e357600080fd5b50565b6121ef81612024565b81146121fa57600080fd5b50565b61220681612036565b811461221157600080fd5b50565b61221d81612064565b811461222857600080fd5b50565b6122348161206e565b811461223f57600080fd5b5056fea26469706673582212207d2fd7a08943771eb5c2c68511c28977e0180815f621d5496612aa258be6750d64736f6c63430008000033";

export class NetworkDemand__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _token: string,
    _priceFeeds: string,
    _tvlFeeds: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<NetworkDemand> {
    return super.deploy(
      _token,
      _priceFeeds,
      _tvlFeeds,
      overrides || {}
    ) as Promise<NetworkDemand>;
  }
  getDeployTransaction(
    _token: string,
    _priceFeeds: string,
    _tvlFeeds: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _token,
      _priceFeeds,
      _tvlFeeds,
      overrides || {}
    );
  }
  attach(address: string): NetworkDemand {
    return super.attach(address) as NetworkDemand;
  }
  connect(signer: Signer): NetworkDemand__factory {
    return super.connect(signer) as NetworkDemand__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): NetworkDemandInterface {
    return new utils.Interface(_abi) as NetworkDemandInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): NetworkDemand {
    return new Contract(address, _abi, signerOrProvider) as NetworkDemand;
  }
}
