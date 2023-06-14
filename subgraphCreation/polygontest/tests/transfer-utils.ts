import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import { ChangeNameEvent, TransferEvent } from "../generated/Transfer/Transfer"

export function createChangeNameEventEvent(_name: string): ChangeNameEvent {
  let changeNameEventEvent = changetype<ChangeNameEvent>(newMockEvent())

  changeNameEventEvent.parameters = new Array()

  changeNameEventEvent.parameters.push(
    new ethereum.EventParam("_name", ethereum.Value.fromString(_name))
  )

  return changeNameEventEvent
}

export function createTransferEventEvent(
  _from: Address,
  _to: Address,
  _value: BigInt
): TransferEvent {
  let transferEventEvent = changetype<TransferEvent>(newMockEvent())

  transferEventEvent.parameters = new Array()

  transferEventEvent.parameters.push(
    new ethereum.EventParam("_from", ethereum.Value.fromAddress(_from))
  )
  transferEventEvent.parameters.push(
    new ethereum.EventParam("_to", ethereum.Value.fromAddress(_to))
  )
  transferEventEvent.parameters.push(
    new ethereum.EventParam("_value", ethereum.Value.fromUnsignedBigInt(_value))
  )

  return transferEventEvent
}
