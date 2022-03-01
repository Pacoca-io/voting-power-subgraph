import { Address } from "@graphprotocol/graph-ts";
import { Transfer } from "../../generated/Pacoca/Pacoca";
import { VotingPower } from "../../generated/VotingPower/VotingPower";
import { setUser, VOTING_POWER_ADDRESS, toDecimal } from "../helpers";

export function handleTokenTransfer(event: Transfer): void {
  const votingPower = VotingPower.bind(
    Address.fromString(VOTING_POWER_ADDRESS)
  );

  setUser(
    event.params.from.toHexString(),
    toDecimal(votingPower.votingPower(event.params.from))
  );


  setUser(
    event.params.to.toHexString(),
    toDecimal(votingPower.votingPower(event.params.to))
  );
}
