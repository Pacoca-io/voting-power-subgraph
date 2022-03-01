// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class PacocaPairAdded extends ethereum.Event {
  get params(): PacocaPairAdded__Params {
    return new PacocaPairAdded__Params(this);
  }
}

export class PacocaPairAdded__Params {
  _event: PacocaPairAdded;

  constructor(event: PacocaPairAdded) {
    this._event = event;
  }

  get _pid(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class PacocaPairRemoved extends ethereum.Event {
  get params(): PacocaPairRemoved__Params {
    return new PacocaPairRemoved__Params(this);
  }
}

export class PacocaPairRemoved__Params {
  _event: PacocaPairRemoved;

  constructor(event: PacocaPairRemoved) {
    this._event = event;
  }

  get _pid(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class VotingPower extends ethereum.SmartContract {
  static bind(address: Address): VotingPower {
    return new VotingPower("VotingPower", address);
  }

  PACOCA(): Address {
    let result = super.call("PACOCA", "PACOCA():(address)", []);

    return result[0].toAddress();
  }

  try_PACOCA(): ethereum.CallResult<Address> {
    let result = super.tryCall("PACOCA", "PACOCA():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  PACOCA_FARM(): Address {
    let result = super.call("PACOCA_FARM", "PACOCA_FARM():(address)", []);

    return result[0].toAddress();
  }

  try_PACOCA_FARM(): ethereum.CallResult<Address> {
    let result = super.tryCall("PACOCA_FARM", "PACOCA_FARM():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  PACOCA_VAULT(): Address {
    let result = super.call("PACOCA_VAULT", "PACOCA_VAULT():(address)", []);

    return result[0].toAddress();
  }

  try_PACOCA_VAULT(): ethereum.CallResult<Address> {
    let result = super.tryCall("PACOCA_VAULT", "PACOCA_VAULT():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  pacocaPairs(param0: BigInt): boolean {
    let result = super.call("pacocaPairs", "pacocaPairs(uint256):(bool)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);

    return result[0].toBoolean();
  }

  try_pacocaPairs(param0: BigInt): ethereum.CallResult<boolean> {
    let result = super.tryCall("pacocaPairs", "pacocaPairs(uint256):(bool)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  votingPower(_user: Address): BigInt {
    let result = super.call("votingPower", "votingPower(address):(uint256)", [
      ethereum.Value.fromAddress(_user)
    ]);

    return result[0].toBigInt();
  }

  try_votingPower(_user: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "votingPower",
      "votingPower(address):(uint256)",
      [ethereum.Value.fromAddress(_user)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _owner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class AddPacocaPairPidCall extends ethereum.Call {
  get inputs(): AddPacocaPairPidCall__Inputs {
    return new AddPacocaPairPidCall__Inputs(this);
  }

  get outputs(): AddPacocaPairPidCall__Outputs {
    return new AddPacocaPairPidCall__Outputs(this);
  }
}

export class AddPacocaPairPidCall__Inputs {
  _call: AddPacocaPairPidCall;

  constructor(call: AddPacocaPairPidCall) {
    this._call = call;
  }

  get _pid(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class AddPacocaPairPidCall__Outputs {
  _call: AddPacocaPairPidCall;

  constructor(call: AddPacocaPairPidCall) {
    this._call = call;
  }
}

export class RemovePacocaPairPidCall extends ethereum.Call {
  get inputs(): RemovePacocaPairPidCall__Inputs {
    return new RemovePacocaPairPidCall__Inputs(this);
  }

  get outputs(): RemovePacocaPairPidCall__Outputs {
    return new RemovePacocaPairPidCall__Outputs(this);
  }
}

export class RemovePacocaPairPidCall__Inputs {
  _call: RemovePacocaPairPidCall;

  constructor(call: RemovePacocaPairPidCall) {
    this._call = call;
  }

  get _pid(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class RemovePacocaPairPidCall__Outputs {
  _call: RemovePacocaPairPidCall;

  constructor(call: RemovePacocaPairPidCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}