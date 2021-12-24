// SPDX-License-Identifier: GPL-3.0-or-later
pragma solidity =0.8.0;

import './SetupToken.sol';
import "/home/jariruddin/BlockApex-Linux/dDAFI-testing/contracts/v2/interfaces/ITVLFeeds.sol";
import '/home/jariruddin/BlockApex-Linux/dDAFI-testing/contracts/v2/StakingManagerV2.sol';
import '../../../contracts/v2/rebase engine/RebaseEngine.sol';

contract SetupContracts {
    StakingDatabase public db;
    StakingManagerV2 public smgr;
    RebaseEngine public rebaseEngine;

    TestERC20 token;
    SetupToken setupToken;

    constructor(address mintTo) {
        
        setupToken = new SetupToken(mintTo);
        
        token = setupToken.token();

        smgr = new StakingManagerV2(token);
        
        db = new StakingDatabase();
        rebaseEngine = new RebaseEngine(db);

        rebaseEngine.addWhitelist(address(this));
        db.addWhitelist(address(rebaseEngine));
        db.addWhitelist(address(this));        
    }

    function setupDB(
        uint256 _maxDAFI, uint256 pd
    ) public {
        uint256 _minimumStakeDays = 1;
        uint256 _minimumStakeAmount = 10 ether;
        uint8 _rewardFee = 100;

        db.setStakingParams(_minimumStakeDays, _minimumStakeAmount, _maxDAFI, _rewardFee, pd);
    }

    function wrapRebasePool() public {
        rebaseEngine.rebasePool();     
    }

}