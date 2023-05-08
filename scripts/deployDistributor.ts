import { ethers } from "hardhat";

async function main() {
  // world cup token
  let token = '0xf9FDf6832eEdbAF5A3000A737Fa692838Ee8f8aC'

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
