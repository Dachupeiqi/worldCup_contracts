import { ethers } from "hardhat";

async function main() {
  const TWO_WEEKS_IN_SECS = 100 * 24 * 60 * 60;
  const timestamp = Math.floor(Date.now() / 1000)
  const deadline = timestamp + TWO_WEEKS_IN_SECS;
  console.log(deadline)

  // 获取对象
  const WorldCup = await ethers.getContractFactory("WorldCup");
  // 部署
  const worldcup = await WorldCup.deploy(deadline);
    // 等待部署完成
  await worldcup.deployed();

  console.log(`new worldcup deployed to ${worldcup.address}`);
  console.log(`construct_params:${deadline}`)
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});