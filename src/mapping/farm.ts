import { Address } from "@graphprotocol/graph-ts";
import { Deposit, Withdraw } from "../../generated/PacocaFarm/PacocaFarm";
import { VotingPower } from "../../generated/VotingPower/VotingPower";
import { toDecimal, setUser ,updateAllUsers, VOTING_POWER_ADDRESS } from "../helpers";

export function handleFarmDeposit(event: Deposit): void {
  const votingPower = VotingPower.bind(
    Address.fromString(VOTING_POWER_ADDRESS)
  );

  updateAllUsers(votingPower);
}

export function handleFarmWithdraw(event: Withdraw): void {
  const votingPower = VotingPower.bind(
    Address.fromString(VOTING_POWER_ADDRESS)
  );

  setUser(
    event.params.user.toHexString(),
    toDecimal(votingPower.votingPower(event.params.user))
  );
}
