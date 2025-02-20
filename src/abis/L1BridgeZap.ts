const ABI = {
  "abi": [
    {
      "inputs": [
        {
          "internalType": "address payable",
          "name": "_wethAddress",
          "type": "address"
        },
        {
          "internalType": "contract ISwap",
          "name": "_baseSwap",
          "type": "address"
        },
        {
          "internalType": "contract ISynapseBridge",
          "name": "_synapseBridge",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [],
      "name": "WETH_ADDRESS",
      "outputs": [
        {
          "internalType": "address payable",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "baseTokens",
      "outputs": [
        {
          "internalType": "contract IERC20",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenAmount",
          "type": "uint256"
        },
        {
          "internalType": "uint8",
          "name": "tokenIndex",
          "type": "uint8"
        }
      ],
      "name": "calculateRemoveLiquidityOneToken",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "availableTokenAmount",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256[]",
          "name": "amounts",
          "type": "uint256[]"
        },
        {
          "internalType": "bool",
          "name": "deposit",
          "type": "bool"
        }
      ],
      "name": "calculateTokenAmount",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "chainId",
          "type": "uint256"
        },
        {
          "internalType": "contract IERC20",
          "name": "token",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "deposit",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "chainId",
          "type": "uint256"
        },
        {
          "internalType": "contract IERC20",
          "name": "token",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "internalType": "uint8",
          "name": "tokenIndexFrom",
          "type": "uint8"
        },
        {
          "internalType": "uint8",
          "name": "tokenIndexTo",
          "type": "uint8"
        },
        {
          "internalType": "uint256",
          "name": "minDy",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "deadline",
          "type": "uint256"
        }
      ],
      "name": "depositAndSwap",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "chainId",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "depositETH",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "chainId",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "internalType": "uint8",
          "name": "tokenIndexFrom",
          "type": "uint8"
        },
        {
          "internalType": "uint8",
          "name": "tokenIndexTo",
          "type": "uint8"
        },
        {
          "internalType": "uint256",
          "name": "minDy",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "deadline",
          "type": "uint256"
        }
      ],
      "name": "depositETHAndSwap",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "chainId",
          "type": "uint256"
        },
        {
          "internalType": "contract IERC20",
          "name": "token",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "redeem",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "to",
          "type": "bytes32"
        },
        {
          "internalType": "uint256",
          "name": "chainId",
          "type": "uint256"
        },
        {
          "internalType": "contract IERC20",
          "name": "token",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "redeemv2",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "chainId",
          "type": "uint256"
        },
        {
          "internalType": "contract IERC20",
          "name": "token",
          "type": "address"
        },
        {
          "internalType": "uint256[]",
          "name": "liquidityAmounts",
          "type": "uint256[]"
        },
        {
          "internalType": "uint256",
          "name": "minToMint",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "deadline",
          "type": "uint256"
        }
      ],
      "name": "zapAndDeposit",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "chainId",
          "type": "uint256"
        },
        {
          "internalType": "contract IERC20",
          "name": "token",
          "type": "address"
        },
        {
          "internalType": "uint256[]",
          "name": "liquidityAmounts",
          "type": "uint256[]"
        },
        {
          "internalType": "uint256",
          "name": "minToMint",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "liqDeadline",
          "type": "uint256"
        },
        {
          "internalType": "uint8",
          "name": "tokenIndexFrom",
          "type": "uint8"
        },
        {
          "internalType": "uint8",
          "name": "tokenIndexTo",
          "type": "uint8"
        },
        {
          "internalType": "uint256",
          "name": "minDy",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "swapDeadline",
          "type": "uint256"
        }
      ],
      "name": "zapAndDepositAndSwap",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "devdoc": {
    "details": "This contract should be deployed with a base Swap.sol address and a SynapseBridge.sol address, otherwise, it will not function.",
    "kind": "dev",
    "methods": {
      "calculateRemoveLiquidityOneToken(uint256,uint8)": {
        "params": {
          "tokenAmount": "the amount of LP token to burn",
          "tokenIndex": "index of which token will be withdrawn"
        },
        "returns": {
          "availableTokenAmount": "calculated amount of underlying token available to withdraw"
        }
      },
      "calculateTokenAmount(uint256[],bool)": {
        "details": "This shouldn't be used outside frontends for user estimates.",
        "params": {
          "amounts": "an array of token amounts to deposit or withdrawal, corresponding to pooledTokens. The amount should be in each pooled token's native precision.",
          "deposit": "whether this is a deposit or a withdrawal"
        },
        "returns": {
          "_0": "token amount the user will receive"
        }
      },
      "deposit(address,uint256,address,uint256)": {
        "params": {
          "amount": "Amount in native token decimals to transfer cross-chain pre-fees*",
          "chainId": "which chain to bridge assets onto",
          "to": "address on other chain to bridge assets to",
          "token": "ERC20 compatible token to deposit into the bridge"
        }
      },
      "depositAndSwap(address,uint256,address,uint256,uint8,uint8,uint256,uint256)": {
        "params": {
          "amount": "Amount in native token decimals to transfer cross-chain pre-fees",
          "chainId": "which chain to bridge assets onto",
          "deadline": "latest timestamp to accept this transaction*",
          "minDy": "the min amount the user would like to receive, or revert to only minting the SynERC20 token crosschain.",
          "to": "address on other chain to bridge assets to",
          "token": "ERC20 compatible token to deposit into the bridge",
          "tokenIndexFrom": "the token the user wants to swap from",
          "tokenIndexTo": "the token the user wants to swap to"
        }
      },
      "depositETH(address,uint256,uint256)": {
        "params": {
          "amount": "Amount in native token decimals to transfer cross-chain pre-fees*",
          "chainId": "which chain to bridge assets onto",
          "to": "address on other chain to bridge assets to"
        }
      },
      "depositETHAndSwap(address,uint256,uint256,uint8,uint8,uint256,uint256)": {
        "params": {
          "amount": "Amount in native token decimals to transfer cross-chain pre-fees",
          "chainId": "which chain to bridge assets onto",
          "deadline": "latest timestamp to accept this transaction*",
          "minDy": "the min amount the user would like to receive, or revert to only minting the SynERC20 token crosschain.",
          "to": "address on other chain to bridge assets to",
          "tokenIndexFrom": "the token the user wants to swap from",
          "tokenIndexTo": "the token the user wants to swap to"
        }
      },
      "redeem(address,uint256,address,uint256)": {
        "params": {
          "amount": "Amount in native token decimals to transfer cross-chain pre-fees*",
          "chainId": "which chain to bridge assets onto",
          "to": "address on other chain to bridge assets to",
          "token": "ERC20 compatible token to redeem into the bridge"
        }
      },
      "redeemv2(bytes32,uint256,address,uint256)": {
        "params": {
          "amount": "Amount in native token decimals to transfer cross-chain pre-fees*",
          "chainId": "which chain to bridge assets onto",
          "to": "address on other chain to bridge assets to",
          "token": "ERC20 compatible token to redeem into the bridge"
        }
      },
      "zapAndDeposit(address,uint256,address,uint256[],uint256,uint256)": {
        "params": {
          "chainId": "which chain to bridge assets onto",
          "deadline": "latest timestamp to accept this transaction*",
          "liquidityAmounts": "the amounts of each token to add, in their native precision",
          "minToMint": "the minimum LP tokens adding this amount of liquidity should mint, otherwise revert. Handy for front-running mitigation",
          "to": "address on other chain to bridge assets to",
          "token": "ERC20 compatible token to deposit into the bridge"
        }
      },
      "zapAndDepositAndSwap(address,uint256,address,uint256[],uint256,uint256,uint8,uint8,uint256,uint256)": {
        "params": {
          "chainId": "which chain to bridge assets onto",
          "liqDeadline": "latest timestamp to accept this transaction",
          "liquidityAmounts": "the amounts of each token to add, in their native precision",
          "minDy": "the min amount the user would like to receive, or revert to only minting the SynERC20 token crosschain.",
          "minToMint": "the minimum LP tokens adding this amount of liquidity should mint, otherwise revert. Handy for front-running mitigation",
          "swapDeadline": "latest timestamp to accept this transaction*",
          "to": "address on other chain to bridge assets to",
          "token": "ERC20 compatible token to deposit into the bridge",
          "tokenIndexFrom": "the token the user wants to swap from",
          "tokenIndexTo": "the token the user wants to swap to"
        }
      }
    },
    "title": "L1BridgeZap",
    "version": 1
  },
  "userdoc": {
    "kind": "user",
    "methods": {
      "calculateRemoveLiquidityOneToken(uint256,uint8)": {
        "notice": "Calculate the amount of underlying token available to withdraw when withdrawing via only single token"
      },
      "calculateTokenAmount(uint256[],bool)": {
        "notice": "A simple method to calculate prices from deposits or withdrawals, excluding fees but including slippage. This is helpful as an input into the various \"min\" parameters on calls to fight front-running"
      },
      "constructor": "Constructs the contract, approves each token inside of baseSwap to be used by baseSwap (needed for addLiquidity())",
      "deposit(address,uint256,address,uint256)": {
        "notice": "Wraps SynapseBridge deposit() function"
      },
      "depositAndSwap(address,uint256,address,uint256,uint8,uint8,uint256,uint256)": {
        "notice": "Wraps SynapseBridge depositAndSwap() function"
      },
      "depositETH(address,uint256,uint256)": {
        "notice": "Wraps SynapseBridge deposit() function to make it compatible w/ ETH -> WETH conversions"
      },
      "depositETHAndSwap(address,uint256,uint256,uint8,uint8,uint256,uint256)": {
        "notice": "Wraps SynapseBridge depositAndSwap() function to make it compatible w/ ETH -> WETH conversions"
      },
      "redeem(address,uint256,address,uint256)": {
        "notice": "Wraps SynapseBridge redeem() function"
      },
      "redeemv2(bytes32,uint256,address,uint256)": {
        "notice": "Wraps SynapseBridge redeemv2() function"
      },
      "zapAndDeposit(address,uint256,address,uint256[],uint256,uint256)": {
        "notice": "Combines adding liquidity to the given Swap, and calls deposit() on the bridge using that LP token"
      },
      "zapAndDepositAndSwap(address,uint256,address,uint256[],uint256,uint256,uint8,uint8,uint256,uint256)": {
        "notice": "Combines adding liquidity to the given Swap, and calls depositAndSwap() on the bridge using that LP token"
      }
    },
    "notice": "This contract is responsible for handling user Zaps into the SynapseBridge contract, through the Synapse Swap contracts. It does so It does so by combining the action of addLiquidity() to the base swap pool, and then calling either deposit() or depositAndSwap() on the bridge. This is done in hopes of automating portions of the bridge user experience to users, while keeping the SynapseBridge contract logic small.",
    "version": 1
  }
}

export default ABI
