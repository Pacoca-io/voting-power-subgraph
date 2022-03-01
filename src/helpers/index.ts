import { Address ,BigInt, BigDecimal } from "@graphprotocol/graph-ts";
import { VotingPower } from "../../generated/VotingPower/VotingPower";
import { User, AllUsers } from "../../generated/schema";

export const VOTING_POWER_ADDRESS =
  "0xd0ceafa5c8cb601fd0528e344a0f769e6de7c171";
export const USERS_ID = "1";

const BI_18 = BigInt.fromI32(18);
const BD_18 = BigDecimal.fromString("1000000000000000000");

export function toDecimal(units: BigInt): BigDecimal {
  return units.toBigDecimal().div(BD_18);
}

export default function setUser(address: string, balance: BigDecimal): void {
  let user = User.load(address);

  if (!user) {
    user = new User(address);
    pushUser(address);
  }

  user.balance = balance;
  user.save();
}

function pushUser(address: string): void {
  let users = AllUsers.load(USERS_ID);

  if (!users) {
    users = new AllUsers(USERS_ID);
  }

  users.addresses.push(address);

  users.save();
}

export function updateAllUsers(votingPower: VotingPower): void {
  const users = AllUsers.load(USERS_ID);

  if (!users) return

  for (let i = 0; i < users.addresses.length; i++) {
    const address = Address.fromString(users.addresses[i]);
    const balance = votingPower.votingPower(address);

    setUser(users.addresses[i], toDecimal(balance));
  }
}
