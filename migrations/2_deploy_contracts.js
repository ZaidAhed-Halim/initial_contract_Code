const sponToken = artifacts.require("sponToken");

module.exports = function(deployer) {
  deployer.deploy(sponToken);
};
