const Compound = require('@compound-finance/compound-js');
const ethers = Compound._ethers;
const erc20Abi = require('./ERC20.abi.json');
const cErc20Abi = require('./cErc20.abi.json');
const cEtherAbi = require('./cEther.abi.json');
const { decimals, cTokens, underlyings } = require('./tokens.js');
const MyContract = artifacts.require('MyContract');
const jsonRpc = 'http://localhost:8545';
const provider = new ethers.providers.JsonRpcProvider(jsonRpc);

contract('MyContract', accounts => {
  let myContract;
  before(async () => {
    // Ethers contract that sends transactions using the 1st test account
    let { address, abi } = await MyContract.deployed(); // truffle's object
    myContract = new ethers.Contract(address, abi, provider.getSigner(accounts[0]));
  });

  it('Runs [_cTokenAmountToUnderlying] for cUSDC', async () => {
    const amount = 500000000000;
    const cToken = cTokens.cUSDC;
    const expected = 109909844;

    let underlying = await myContract.callStatic._cTokenAmountToUnderlying(cToken, amount);

    assert.equal(expected, underlying, `_cTokenAmountToUnderlying calculation is incorrect. ${underlying} ${expected}`);
  });

  it('Runs [_cTokenAmountToUnderlying] for cUNI', async () => {
    const amount = 500000000000;
    const cToken = cTokens.cUNI;
    const expected = 101009481281222927123;

    let underlying = await myContract.callStatic._cTokenAmountToUnderlying(cToken, amount);

    assert.equal(expected, underlying, `_cTokenAmountToUnderlying calculation is incorrect. ${underlying} ${expected}`);
  });

});
