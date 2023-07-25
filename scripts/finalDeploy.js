const hre = require("hardhat");

async function main(){
    const fund = await hre.ethers.getContractFactory("funds");
    const contarct = await fund.deploy();
  
    await contarct.deployed();
    console.log("Contract deployed to:", contarct.address);
}
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
    }
);