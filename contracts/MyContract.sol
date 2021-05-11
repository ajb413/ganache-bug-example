pragma solidity ^0.8.0;

interface ICToken {
  function exchangeRateCurrent() external returns (uint256);
}

contract MyContract {
  function _cTokenAmountToUnderlying(address cToken, uint amount) public returns (uint) {
    uint erc = ICToken(cToken).exchangeRateCurrent();
    uint valueInUnderlying = (amount * 1e18) / (1e36 / erc);
    return valueInUnderlying;
  }
}
