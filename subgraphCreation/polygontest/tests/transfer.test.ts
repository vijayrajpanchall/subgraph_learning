import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt } from "@graphprotocol/graph-ts"
import { ChangeNameEvent } from "../generated/schema"
import { ChangeNameEvent as ChangeNameEventEvent } from "../generated/Transfer/Transfer"
import { handleChangeNameEvent } from "../src/transfer"
import { createChangeNameEventEvent } from "./transfer-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let _name = "Example string value"
    let newChangeNameEventEvent = createChangeNameEventEvent(_name)
    handleChangeNameEvent(newChangeNameEventEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("ChangeNameEvent created and stored", () => {
    assert.entityCount("ChangeNameEvent", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "ChangeNameEvent",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_name",
      "Example string value"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
