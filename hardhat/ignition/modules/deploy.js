const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

const MerchantPayContract = buildModule("DeployContracts", (m) => {
  // Use the existing cKES mainnet address
  const cKESAddress = "0x456a3D042C0DbD3db53D5489e98dFb038553B0d0";

  // Deploy MerchantPay contract with the existing cKES address
  const merchantPay = m.contract("MerchantPay", [cKESAddress]);

  return { merchantPay };
});

module.exports = MerchantPayContract;