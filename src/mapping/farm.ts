import { Deposit, Withdraw } from "../../generated/PacocaFarm/PacocaFarm";
import { VotingPower } from "../../generated/VotingPower/VotingPower";
import {
  setUser,
  toDecimal,
  toAddress,
  VOTING_POWER_ADDRESS,
  checkAddressBlackList,
} from "../helpers";

export function handleFarmDeposit(event: Deposit): void {
  if (checkAddressBlackList(event.params.user)) return

  const votingPower = VotingPower.bind(toAddress(VOTING_POWER_ADDRESS));

  setUser(
    event.params.user.toHexString(),
    toDecimal(votingPower.votingPower(event.params.user))
  );
}

export function handleFarmWithdraw(event: Withdraw): void {
  if (checkAddressBlackList(event.params.user)) return

  const votingPower = VotingPower.bind(toAddress(VOTING_POWER_ADDRESS));

  setUser(
    event.params.user.toHexString(),
    toDecimal(votingPower.votingPower(event.params.user))
  );
}
