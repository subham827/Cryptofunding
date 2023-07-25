// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function getBalances(address){
  const balanceBigInt = await hre.ethers.provider.getBalance(address);
  return hre.ethers.utils.formatEther(balanceBigInt);
}
async function consolebalances(addresses){
  let c=0;
  for (const address of addresses) {
   
    console.log("Address "+c+" "+address+" has "+await getBalances(address));c++;
    
  }

}
async function consolememeos(memos){
  let c=0;
  for (const memo of memos) {
    const name = memo.name;
    const timestamp = memo.timestamp;
    const message = memo.message;
    console.log("Memo "+c+" "+name+" "+timestamp+" "+message);c++;
   
    
  }

}
async function main() {
  const [owner, addr1, addr2, addr3] = await hre.ethers.getSigners();
  const fund = await hre.ethers.getContractFactory("funds");
  const contarct = await fund.deploy();

  await contarct.deployed();
  console.log("Contract deployed to:", contarct.address);
  const addresses = [owner.address, addr1.address, addr2.address, addr3.address ];
  console.log("Before transfer");
  await consolebalances(addresses);
  const amount = {value: hre.ethers.utils.parseEther("1.0")} 
  await contarct.connect(addr1).givefund("addr1","test message",amount);
  await contarct.connect(addr2).givefund("addr2","test message",amount);
  await contarct.connect(addr3).givefund("addr3","test message",amount);
  console.log("After transfer");
  await consolebalances(addresses);
 
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
