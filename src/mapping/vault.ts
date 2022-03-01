import { Address } from "@graphprotocol/graph-ts";
import { AllUsers } from "../../generated/schema";
import { VotingPower } from "../../generated/VotingPower/VotingPower";
import { Deposit, Withdraw } from "../../generated/PacocaVault/PacocaVault";
import { toDecimal, setUser, VOTING_POWER_ADDRESS, updateAllUsers, setUser } from "../helpers";

export function handleVaultDeposit(event: Deposit): void {
  const votingPower = VotingPower.bind(
    Address.fromString(VOTING_POWER_ADDRESS)
  );

  updateAllUsers(votingPower);
}

export function handleVaultWithdraw(event: Withdraw): void {
  const votingPower = VotingPower.bind(
    Address.fromString(VOTING_POWER_ADDRESS)
  );

  setUser(
    event.params.sender.toHexString(),
    toDecimal(votingPower.votingPower(event.params.sender))
  );
}
