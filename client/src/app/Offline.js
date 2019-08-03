import React from "react"
import { drizzleReactHooks } from 'drizzle-react'

export default ({children}) => {
  let state = drizzleReactHooks.useDrizzleState(a => a)
  let web3Status = state.web3.status;
  let pollInitialized =state.contracts.Poll.initialized;
  let verifierInitialized = state.contracts.Verifier.initialized;

  return (web3Status === 'initialized' && pollInitialized && verifierInitialized) ? children : <p>loading smart contracts...</p>
}