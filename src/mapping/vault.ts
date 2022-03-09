import { Address } from "@graphprotocol/graph-ts";
import { VotingPower } from "../../generated/VotingPower/VotingPower";
import { Deposit, Withdraw } from "../../generated/PacocaVault/PacocaVault";
import {
  toDecimal,
  setUser,
  VOTING_POWER_ADDRESS,
  setUser,
  checkAddressBlackList,
} from "../helpers";

export function handleVaultDeposit(event: Deposit): void {
  if (checkAddressBlackList(event.params.sender)) return;

  const votingPower = VotingPower.bind(
    Address.fromString(VOTING_POWER_ADDRESS)
  );
}

export function handleVaultWithdraw(event: Withdraw): void {
  if (checkAddressBlackList(event.params.sender)) return;

  const votingPower = VotingPower.bind(
    Address.fromString(VOTING_POWER_ADDRESS)
  );

  setUser(
    event.params.sender.toHexString(),
    toDecimal(votingPower.votingPower(event.params.sender))
  );
}
