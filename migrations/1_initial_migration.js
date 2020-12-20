// const Dai = artifacts.require("Dai");
const WETH9 = artifacts.require("WETH9");

module.exports = function (deployer) {
  // deployer.deploy(Dai,3);
  deployer.deploy(WETH9);
};
