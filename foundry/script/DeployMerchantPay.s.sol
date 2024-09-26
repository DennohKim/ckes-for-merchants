// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Script, console} from "forge-std/Script.sol";
import {MerchantPay} from "../src/MerchantPay.sol";


contract DeployMerchantPay is Script {
    function run() external {
        uint256 deployerPrivateKey = vm.envUint("PRIVATE_KEY");
        address CKES = vm.envAddress("CKES_ADDRESS");

        vm.startBroadcast(deployerPrivateKey);

        MerchantPay merchantPay = new MerchantPay(CKES);

        vm.stopBroadcast();
    }
}
