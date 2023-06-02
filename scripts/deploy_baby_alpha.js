const hre = require("hardhat");

async function main() {
  const BabyAlpha = await hre.ethers.getContractFactory("BabyAlpha");
  const baby_alpha = await BabyAlpha.deploy();

  await baby_alpha.deployed();

  console.log(
    `BabyAlpha Contract deployed to ${baby_alpha.address}`
  );
}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
