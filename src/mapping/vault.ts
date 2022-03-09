import { Address } from "@graphprotocol/graph-ts";
import { VotingPower } from "../../generated/VotingPower/VotingPower";
import { PacocaVault } from "../../generated/PacocaVault/PacocaVault";
import { Deposit, Withdraw } from "../../generated/PacocaVault/PacocaVault";
import {
    toDecimal,
    setUser,
    VOTING_POWER_ADDRESS,
} from "../helpers";

export function handleVaultDeposit(event: Deposit): void {
    handleVault(event.params.sender, event.address)
}

export function handleVaultWithdraw(event: Withdraw): void {
    handleVault(event.params.sender, event.address)
}

function handleVault(userAddress: Address, vaultAddress: Address): void {
    const vaultContract = PacocaVault.bind(vaultAddress);
    const votingPowerContract = VotingPower.bind(Address.fromString(VOTING_POWER_ADDRESS));

    const userInfo = vaultContract.userInfo(userAddress);

    const autoPacocaShares = toDecimal(userInfo.value0);
    const autoPacocaPricePerShare = toDecimal(vaultContract.getPricePerFullShare());
    const votingPower = toDecimal(votingPowerContract.votingPower(userAddress));

    setUser(
        userAddress.toHexString(),
        votingPower,
        autoPacocaShares,
        autoPacocaPricePerShare
    )
}
