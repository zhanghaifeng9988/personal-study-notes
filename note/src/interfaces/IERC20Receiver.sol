// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

interface IERC20Receiver {
    function tokensReceived(
        address sender,
        uint256 amount,
        bytes calldata data
    ) external returns (bytes4);
}