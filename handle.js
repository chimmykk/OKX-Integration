const express = require("express");
const { ethers } = require("ethers");

const app = express();

// Replace with the contract address and ABI
const CONTRACT_ADDRESS = "0x68E31543733870377cAb3Ad4B811cecA71e7E6f8";
const CONTRACT_ABI = [
  {
    inputs: [
      { internalType: "address", name: "", type: "address" },
      { internalType: "uint256", name: "", type: "uint256" },
    ],
    name: "balanceOf",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
];

// RPC provider
const provider = new ethers.JsonRpcProvider("https://rpc.mainnet.taiko.xyz");
const contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, provider);

// GET endpoint
app.get("/mintcheck", async (req, res) => {
  try {
    const { address } = req.query;

    // Validate the address
    if (!address || !ethers.isAddress(address)) {
      return res.json({
        code: 0,
        data: false, // Invalid address
      });
    }

    // Call balanceOf with a fixed tokenId = 0
    const tokenId = 0; // Fixed token ID for this example
    const balance = await contract.balanceOf(address, tokenId);

    // Return true if balance > 0, otherwise false
    return res.json({
      code: 0,
      data: balance > 0, // Convert balance to boolean
    });
  } catch (error) {
    console.error("Error:", error);
    res.json({
      code: 0,
      data: false, // Default to false on errors
    });
  }
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
