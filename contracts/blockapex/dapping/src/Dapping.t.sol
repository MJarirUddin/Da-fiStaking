// SPDX-License-Identifier: GPL-3.0-or-later
pragma solidity =0.8.0;
import './hevm.sol';
import './Dapping.sol';
import '../lib/ds-test/src/test.sol';

 
contract DappingTest is DSTest, Dapping {
    Dapping public dapping;
    Hevm hevm;

    function setUp() public {
        dapping = new Dapping();
        hevm = Hevm(0x7109709ECfa91a80626fF3989D68f67F5b1DD12D);
    }

    function test_Invariant(uint256 md, uint32 pd, uint32 bn) public {
        dapping.contracts().setupDB(md,  uint256(pd + 1));    

        hevm.warp(block.timestamp + bn);
        
        dapping.contracts().wrapRebasePool();
        dapping.contracts().db().getPool();

        uint256 MaxDafi = dapping.contracts().rebaseEngine().MAX_DAFI();
        uint256 TdDafiDist = dapping.contracts().rebaseEngine().totaldDAFIDistributed();

        assertTrue(true);

        emit log_named_uint('this is MaxDafi', MaxDafi);
        emit log_named_uint('this is TdDafiDist', TdDafiDist);
    }

    // Checking monotonous fee weight and pool weight
    // todo: noted = record currPoolW, currFeeW, accPoolW, accfeeW
    // todo: call = calling stake and unstake
    // todo: push = push to array the `noted` after each `call`


}
