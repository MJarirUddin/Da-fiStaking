// SPDX-License-Identifier: MIT
pragma solidity 0.8.0;

import './TestERC20.sol';

contract SetupToken {
    TestERC20 public token;

    constructor(address mintTo) {
        token = new TestERC20(mintTo, 1e18 ether);
    }

    function getBalanceOf(address sender) public view returns (uint256 bal) {
        bal = token.balanceOf(sender);
    }
}
