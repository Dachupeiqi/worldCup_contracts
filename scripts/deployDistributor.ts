import { ethers } from "hardhat";

async function main() {
  // world cup token
  let token = '0xA469B9D3E5bB02887325dE6ec527CA657e0C18b1'

  const Distributor = await ethers.getContractFactory("WorldCupDistributor");
  const distributor = await Distributor.deploy(token);

  await distributor.deployed();

  console.log(`new distributor: ${distributor.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
