const hre = require('hardhat')
const { ethers } = hre;

async function main() {
    // const NFT = await hre.ethers.getContractFactory('SmartWager')
    // const nft = await NFT.deploy()
    // await nft.deployed()
    // console.log('NFT contract deployed to:', nft.address)
    const [deployer] = await hre.ethers.getSigners();
    const accountBalance = await deployer.getBalance();

    console.log('Deploying contracts with account: ', deployer.address);
    console.log('Account balance: ', accountBalance.toString());

    const SmartWager = await ethers.getContractFactory("SmartWager");
    const contract = await SmartWager.deploy();
  
    await contract.deployed();
  
    console.log("Contract deployed to address:", contract.address);
}

main()
.then(() => process.exit(0))
.catch((error) => {
    console.error(error)
    process.exit(1)
})