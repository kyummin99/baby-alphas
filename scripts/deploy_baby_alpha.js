const hre = require("hardhat");


async function main() {
    const BabyAlpha = await hre.ethers.getContractFactory("BabyAlpha");
    const baby_alpha = await BabyAlpha.deploy();

    await baby_alpha.deployed();

    console.log(
        `BabyAlpha Contract deployed to ${baby_alpha.address}`
    );

    for (let i = 1; i <= 8; i++) {
        const tx = await baby_alpha.mint(i);
        const receipt = await tx.wait();
        console.log(
            `BabyAlpha #${i} minted via Tx ${receipt.transactionHash}`
        );
    }
}


main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
