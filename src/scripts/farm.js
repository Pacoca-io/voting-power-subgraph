const hre = require("hardhat");
const PACOCA_FARM_ABI = require("../../abis/PacocaFarm.json");
const ROUTER_ABI = require("../../abis/PancakeRouter.json");
const ERC20 = require("../../abis/Erc20.json");

const ethers = hre.ethers;
const toEther = ethers.utils.parseEther;
const Contract = ethers.Contract;
const BigNumber = ethers.BigNumber;

const WBNB_ADDRESS = "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c";
const PACOCA_ADDRESS = "0x55671114d774ee99d653d6c12460c780a67f1d18";
const PACOCA_FARM_ADDRESS = "0x55410D946DFab292196462ca9BE9f3E4E4F337Dd";
const PANCAKE_ROUTER_ADDRESS = "0x10ed43c718714eb63d5aa57b78b54704e256024e";

const bnbToPacoca = async ({ amount, wallet }) => {
  const PATH = [WBNB_ADDRESS, PACOCA_ADDRESS];

  const router = new Contract(PANCAKE_ROUTER_ADDRESS, ROUTER_ABI, wallet, {
    value: toEther("1"),
  });

  const AMOUNT_OUT_MIN = "0";
  const block = await ethers.provider.getBlock("latest");
  const deadline = block.timestamp + 60 * 60;

  await router.swapExactETHForTokens(
    AMOUNT_OUT_MIN,
    PATH,
    wallet.address,
    deadline,
    { value: toEther(`${amount}`) }
  );
};

const depositFarm = async ({ amount, wallet }) => {
  const PACOCA_FARM_PID = "0";

  const pacocaFarm = new Contract(PACOCA_FARM_ADDRESS, PACOCA_FARM_ABI, wallet);

  await pacocaFarm.deposit(PACOCA_FARM_PID, amount);
};

(async () => {
  try {
    const [wallet] = await ethers.getSigners();
    const pacoca = new Contract(PACOCA_ADDRESS, ERC20, wallet);

    await bnbToPacoca({ amount: 1, wallet });

    const pacocaBalance = await pacoca.balanceOf(wallet.address);

    console.log("PACOCA BALANCE: ", pacocaBalance);

    await pacoca.approve(PACOCA_FARM_ADDRESS, pacocaBalance);

    await depositFarm({ amount: pacocaBalance, wallet });

    console.log("DEPOSIT MADE");
  } catch (e) {
    console.error(e);
  }
})();
