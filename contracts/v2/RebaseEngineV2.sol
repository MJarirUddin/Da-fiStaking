// SPDX-License-Identifier: GNU GPLv3
pragma solidity 0.8.0;

import "openzeppelin-solidity/contracts/access/Ownable.sol";
import "../interfaces/IRebaseEngine.sol";
import "../interfaces/INetworkDemand.sol";
import "./StakingDatabaseV2.sol";

contract RebaseEngineV2 is IRebaseEngine, Ownable {

    INetworkDemand public networkDemand;
    StakingDatabaseV2 public database;

    uint constant EIGHT_DECIMALS = 100000000;
    bool INITIALIZED;

    mapping(address => bool) public whitelists; // The accounts which can access this Rebase Engine

    modifier onlyWhitelist() {
        require(whitelists[msg.sender], "Not authoriused to access the rebase engine");
        _;
    }

    function initialize(INetworkDemand _networkDemand, StakingDatabaseV2 _database) external onlyOwner{
        require(!INITIALIZED, "Rebase Engine already initialized");
        networkDemand = _networkDemand;
        database = _database;
        INITIALIZED = true;
    }

    function updateNetworkDemand(INetworkDemand _networkDemand) external onlyWhitelist{
        networkDemand = _networkDemand;
    }

    function updateDatabase(StakingDatabaseV2 _database) external onlyWhitelist{
        database = _database;
    }

    /*
   * This method rebases the pool as well as the user's stake
   */
    function rebase(address user) external override onlyWhitelist {
        _rebasePool();
        _rebaseStake(user);
    }

    function rebasePool() external override onlyWhitelist {
        _rebasePool();
    }

    /*
    * This method calculates pool weight from the last time it got updated to the current time
    */
    function _rebasePool() internal {

        if(database.getFirstRebaseTime() == 0){
            database.setFirstRebaseTime();
        }

        Pool memory pool = database.getPool();
        uint maxTimestampForCalc;

        if(database.isProgramEnded() && pool.lastUpdatedOn > database.getProgramEndedAt()){
            return;
        } else if(database.isProgramEnded() && pool.lastUpdatedOn < database.getProgramEndedAt()) {
            maxTimestampForCalc = database.getProgramEndedAt();
        }else{
            maxTimestampForCalc = block.timestamp;
        }

        uint elapsedTime = pool.lastUpdatedOn == 0 ? 0 : maxTimestampForCalc - pool.lastUpdatedOn;

        if(elapsedTime == 0){
            return;
        }

        uint MAX_DAFI = database.getMaxDAFI();

        uint dDAFIDistributedCurrent = database.getDistributePerSecond() * elapsedTime;

        uint totaldDAFIDistributed = database.getdDAFIDistributed() + dDAFIDistributedCurrent;

        database.setdDAFIDistributed(totaldDAFIDistributed);

        uint MDICurrent = (MAX_DAFI - totaldDAFIDistributed) / (database.getProgramDuration() - (maxTimestampForCalc - database.getFirstRebaseTime()));

        database.setDistributePerSecond(MDICurrent);

        uint totalStaked = database.getTotalStaked();

        uint currentPoolWeight = totalStaked > 0 ? ((MDICurrent * elapsedTime * EIGHT_DECIMALS)/ totalStaked) : 0;

        uint currentFeeWeight = totalStaked > 0 ? ((database.getFeesDeposited() * EIGHT_DECIMALS)/ totalStaked) : 0;

        database.setFeesDeposited(0); // Setting it zero as fees deposited is incorporated in Fee Weight

        database.addAccumulatedWeight(currentPoolWeight, currentFeeWeight);
    }

    /*
    * This method calculates the user reward generated till now based on current accumulated pool weight and user staked amount
    */
    function _rebaseStake(address user) internal {

        Stake memory stake = database.getUserStake(user);

        uint currentAccumulatedWeight = database.getAccumulatedPoolWeight();
        uint lastAccumulatedWeight = stake.lastStakingAccumulatedWeight;

        uint256 newReward = ((currentAccumulatedWeight - lastAccumulatedWeight) * (stake.amount)) / EIGHT_DECIMALS;

        uint currentAccumulatedFeeWeight = database.getAccumulatedFeeWeight();
        uint lastAccumulatedFeeWeight = stake.lastAccumulatedFeeWeight;

        uint newFee = ((currentAccumulatedFeeWeight - lastAccumulatedFeeWeight) * stake.amount) / EIGHT_DECIMALS;

        database.updateUserStake(user, newReward, currentAccumulatedWeight, newFee, currentAccumulatedFeeWeight);
    }

    function addWhitelist(address account) external onlyOwner {
        require(account != address(0));
        whitelists[account] = true;
    }

    function removeWhitelist(address account) external onlyOwner {
        require(account != address(0));
        require(whitelists[account], "Account doesnt exist in whitelist");
        whitelists[account] = false;
    }
}