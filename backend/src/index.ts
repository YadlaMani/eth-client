import express from "express";
import { Block, JsonRpcProvider, id } from "ethers";
const provider = new JsonRpcProvider(
  "https://eth-mainnet.g.alchemy.com/v2/nnY0qPUQLYsUvb5BKJM5bh81sI6O0PQG"
);
// const app = express();
// import { abi } from "./abi";
// app.listen(5050, () => {
//   console.log("Server is running on port 5050");
// });
// app.get("/", (req, res) => {
//   res.send("Hello World");
// });
async function pollBlock(blockNumber: number) {
  const logs = await provider.getLogs({
    address: "0xdac17f958d2ee523a2206206994597c13d831ec7",
    fromBlock: blockNumber,
    toBlock: blockNumber + 2,
    topics: [id("Transfer(address,address,uint256)")],
  });
  console.log(logs);
}
async function getBalance(blockNumber: number) {
  const balance = await provider.getBalance(
    "0x587EFaEe4f308aB2795ca35A27Dff8c1dfAF9e3f",
    blockNumber
  );
  console.log(balance);
}
pollBlock(21493826);
getBalance(0);
