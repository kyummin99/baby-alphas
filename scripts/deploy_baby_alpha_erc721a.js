const hre = require("hardhat");


async function main() {
    console.log(`
============================================================
           *** Deploying $BABYALPHA(ERC721A) ***
    ____  ___    ______  __   ___    __    ____  __  _____
   / __ )/   |  / __ ) \/ /  /   |  / /   / __ \/ / / /   |
  / __  / /| | / __  |\  /  / /| | / /   / /_/ / /_/ / /| |
 / /_/ / ___ |/ /_/ / / /  / ___ |/ /___/ ____/ __  / ___ |
/_____/_/  |_/_____/ /_/  /_/  |_/_____/_/   /_/ /_/_/  |_|

============================================================
    `)

    const BabyAlphaERC721A = await hre.ethers.getContractFactory("BabyAlphaERC721A");
    const baby_alpha_erc721a = await BabyAlphaERC721A.deploy();

    await baby_alpha_erc721a.deployed();

    console.log(
        `BabyAlphaERC721A Contract deployed to ${baby_alpha_erc721a.address}`
    );

    const tx = await baby_alpha_erc721a.mint(8);
    const receipt = await tx.wait();
    console.log(
        `Multiple BabyAlphaERC721A minted via Tx ${receipt.transactionHash}(gas: ${receipt.gasUsed})`
    );
}


main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
