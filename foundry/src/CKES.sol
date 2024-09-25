// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts ^5.0.0
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Permit.sol";

contract CKES is ERC20, ERC20Permit {
  constructor() ERC20("CKES", "Test CKES") ERC20Permit("CKES") {
    _mint(msg.sender, 1000 * 10 ** decimals());
  }
}
