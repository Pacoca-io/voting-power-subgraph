import { Transfer } from "../../generated/Pacoca/Pacoca";
import { VotingPower } from "../../generated/VotingPower/VotingPower";
import {
  setUser,
  VOTING_POWER_ADDRESS,
  toDecimal,
  toAddress,
  checkAddressBlackList,
} from "../helpers";

export function handleTokenTransfer(event: Transfer): void {
  const votingPower = VotingPower.bind(toAddress(VOTING_POWER_ADDRESS));

  if (!checkAddressBlackList(event.params.from))
    setUser(
      event.params.from.toHexString(),
      toDecimal(votingPower.votingPower(event.params.from)),
      null,
      null
    );

  if (!checkAddressBlackList(event.params.to))
    setUser(
      event.params.to.toHexString(),
      toDecimal(votingPower.votingPower(event.params.to)),
      null,
      null
    );
}
