// SPDX-License-Identifier: GNU GPLv3
pragma solidity 0.8.0;

interface INetworkDemandV2 {

    function calculateNetworkDemand() external returns (uint);
}