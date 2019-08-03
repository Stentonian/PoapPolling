import React from "react"
import { drizzleReactHooks } from 'drizzle-react'
import Poll from "../poll/Poll";

const GetAnswers = ({ questionData }) => {
  const { numAnswers, index, question, expirationDateTime, creationDateTime } = questionData
  const { useCacheCall } = drizzleReactHooks.useDrizzle()
  let allAnswers = []
  /*eslint-disable */
  for (let i = 0; i < numAnswers; ++i) {
    const answer = useCacheCall('Poll', 'getAnswer', index, i)
    allAnswers.push({ id: i, text: answer })
  }
  /*eslint-enable */

  const { useCacheSend } = drizzleReactHooks.useDrizzle()
  // const { send, TXObjects } = useCacheSend('MyToken', 'transfer')

  // const sendTransaction = ()

  return <Poll
    key={index}
    poll={{ expirationDateTime, creationDateTime, question, choices: allAnswers, createdBy: { username: 'EthIndia', name: 'Team' } }}
    currentVote={1}
    handleVoteChange={(event) => console.log('poll change', event)}
    handleVoteSubmit={(event) => console.log('poll submit', event)} />
}

const GetQuestions = ({ numQuestions }) => {
  const { useCacheCall } = drizzleReactHooks.useDrizzle()
  let allQuestions = []
  /*eslint-disable */
  for (let i = 0; i < numQuestions; ++i) {
    const questionStatement = useCacheCall('Poll', 'getQuestion', i)
    const numAnswers = parseInt(useCacheCall('Poll', 'getNumAnswers', i))
    const expirationDateTime = parseInt(useCacheCall('Poll', 'getQuestionEndTime', i)) * 1000
    const creationDateTime = parseInt(useCacheCall('Poll', 'getQuestionStartTime', i)) * 1000
    allQuestions.push({ question: questionStatement, numAnswers, index: i, expirationDateTime, creationDateTime })
  }
  /*eslint-enable */

  const randomRerenderKey = Math.floor(Math.random() * 100000000)

  return allQuestions.map((item, i) => (!!item.question) ?
    <GetAnswers
      key={i + randomRerenderKey}
      questionData={item} />
    : <p key={i}>Loading Question details...</p>
  )
}

export default () => {
  // const { useCacheEvents } = drizzleReactHooks.useDrizzle()
  const drizzleState = drizzleReactHooks.useDrizzleState(drizzleState => ({
    account: drizzleState.accounts[0]
  }))
  const { useCacheCall } = drizzleReactHooks.useDrizzle()

  const numQuestions = useCacheCall('Poll', 'getNumQuestions')

  return <GetQuestions key={numQuestions} numQuestions={numQuestions} />
}
