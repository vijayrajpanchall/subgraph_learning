import {
  ChangeNameEvent as ChangeNameEventEvent,
  TransferEvent as TransferEventEvent
} from "../generated/Transfer/Transfer"
import { ChangeNameEvent, TransferEvent } from "../generated/schema"

export function handleChangeNameEvent(event: ChangeNameEventEvent): void {
  let entity = new ChangeNameEvent(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._name = event.params._name

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTransferEvent(event: TransferEventEvent): void {
  let entity = new TransferEvent(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._from = event.params._from
  entity._to = event.params._to
  entity._value = event.params._value

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
