import { Address, BigDecimal } from "@graphprotocol/graph-ts";
import { VotingPower } from "../../generated/VotingPower/VotingPower";
import { PacocaVault } from "../../generated/PacocaVault/PacocaVault";
import { Deposit, Withdraw } from "../../generated/PacocaVault/PacocaVault";
import {
  toDecimal,
  setUser,
  VOTING_POWER_ADDRESS,
  setUser,
  checkAddressBlackList,
} from "../helpers";

interface IUserInfo {
  votingPower: BigDecimal;
  autoPacocaShares: BigDecimal;
  autoPacocaPricePerShare: BigDecimal;
}

export function handleVaultDeposit(event: Deposit): void {
  if (checkAddressBlackList(event.params.sender)) return;

  const user = event.params.sender;

  const userInfo = getUserInfo(
    user,
    event.address,
    Address.fromString(VOTING_POWER_ADDRESS)
  );

  setUser(
    user.toHexString(),
    userInfo.votingPower,
    userInfo.autoPacocaShares,
    userInfo.autoPacocaPricePerShare
  );
}

export function handleVaultWithdraw(event: Withdraw): void {
  if (checkAddressBlackList(event.params.sender)) return;

  const votingPower = VotingPower.bind(
    Address.fromString(VOTING_POWER_ADDRESS)
  );

  const user = event.params.sender;

  const userInfo = getUserInfo(
    user,
    event.address,
    Address.fromString(VOTING_POWER_ADDRESS)
  );

  setUser(
    user.toHexString(),
    userInfo.votingPower,
    userInfo.autoPacocaShares,
    userInfo.autoPacocaPricePerShare
  );
}

function getUserInfo(
  user: Address,
  vaultAddress: Address,
  votingPowerAddress: Address
): IUserInfo {
  const vault = PacocaVault.bind(vaultAddress);
  const votingPower = VotingPower.bind(votingPowerAddress);

  const votingPower = toDecimal(votingPower.votingPower(user));

  const userInfo = pacocaVault.userInfo(user);
  const autoPacocaShares = toDecimal(userInfo.shares);
  const autoPacocaPricePerShare = toDecimal(pacocaVault.getPricePerFullShare());

  return { votingPower, autoPacocaShares, autoPacocaPricePerShare };
}
