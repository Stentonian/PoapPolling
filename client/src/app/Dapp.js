import React from "react"
import { drizzleReactHooks } from 'drizzle-react'

export default () => {
  // const { useCacheEvents } = drizzleReactHooks.useDrizzle()
  const drizzleState = drizzleReactHooks.useDrizzleState(drizzleState => ({
    account: drizzleState.accounts[0]
  }))
  const { useCacheCall } = drizzleReactHooks.useDrizzle()
  const question = useCacheCall('Poll', 'getQuestion', 0)

  console.log({question})

  return <p>test from jason</p>
}