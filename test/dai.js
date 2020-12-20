const Dai = artifacts.require("Dai");
// const { ethers } = require("ethers");

contract('Dai', (accounts) => {

  it('mint Dai ',async () =>{
    const accountOne = accounts[0]
    const ins = await Dai.deployed();
    const daiNum='1000000000000000000000000'//100万dai
    await ins.mint(accountOne,daiNum,{from:accountOne})
    const result=await ins.balanceOf.call(accountOne)
    assert.equal(result, daiNum, "Num wasn't correct");
  })

  
});
