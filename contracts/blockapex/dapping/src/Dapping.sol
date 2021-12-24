// SPDX-License-Identifier: GPL-3.0-or-later
pragma solidity =0.8.0;

import "/home/jariruddin/BlockApex-Linux/dDAFI-testing/contracts/blockapex/setup/SetupContracts.sol";

contract Dapping {
    SetupContracts public contracts;

    constructor() {
        contracts = new SetupContracts(msg.sender);
    }
}
