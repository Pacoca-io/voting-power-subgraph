import { Address, BigInt, BigDecimal, store } from "@graphprotocol/graph-ts";
import { VotingPower } from "../../generated/VotingPower/VotingPower";
import { User, AllUsers } from "../../generated/schema";

export const VOTING_POWER_ADDRESS =
  "0xd0ceafa5c8cb601fd0528e344a0f769e6de7c171";
export const USERS_ID = "1";

const BI_18 = BigInt.fromI32(18);
const BD_18 = BigDecimal.fromString("1000000000000000000");
const BD_ZERO = BigDecimal.fromString("0");

const ADDRESS_BLACKLIST = [
  toAddress("0x0000000000000000000000000000000000000000"),
  toAddress("0x000000000000000000000000000000000000dead"),
  toAddress("0xd0ceeacfee90aa1371e7ebb8df7ca9efb77d091d"), // TIMELOCK
];

export function toDecimal(units: BigInt): BigDecimal {
  return units.toBigDecimal().div(BD_18);
}

export default function setUser(address: string, balance: BigDecimal): void {
  let user = User.load(address);

  if (!user) {
    user = new User(address);
    pushUser(address);
  }

  if (balance.equals(BD_ZERO)) {
    store.remove('User', address);
  } else {
    user.balance = balance;
    user.save();
  }
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

  if (!users) return;

  for (let i = 0; i < users.addresses.length; i++) {
    const address = toAddress(users.addresses[i]);

    if (User.load(address.toHexString())) {
      setUser(users.addresses[i], toDecimal(votingPower.votingPower(address)));
    }
  }
}

export function checkAddressBlackList(address: Address): boolean {
  return ADDRESS_BLACKLIST.includes(address);
}

export function toAddress(address: string): Address {
  return Address.fromString(address);
}
