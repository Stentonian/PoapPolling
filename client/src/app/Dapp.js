import React from "react"
import { drizzleReactHooks } from 'drizzle-react'

const GetAnswers = ({ questionData }) => {
  const { numAnswers, index, question } = questionData
  const { useCacheCall } = drizzleReactHooks.useDrizzle()
  let allAnswers = []
  /*eslint-disable */
  for (let i = 0; i < numAnswers; ++i) {
    // console.log({ index, i })
    const answer = useCacheCall('Poll', 'getAnswer', index, i)
    // console.log(answer)
    allAnswers.push({ answer })
  }
  /*eslint-enable */
  // console.log(question, allAnswers)

  return <p>test from jason</p>
}

const GetQuestions = ({ numQuestions }) => {
  const { useCacheCall } = drizzleReactHooks.useDrizzle()
  let allQuestions = []
  /*eslint-disable */
  for (let i = 0; i < numQuestions; ++i) {
    const questionStatement = useCacheCall('Poll', 'getQuestion', i)
    const numAnswers = parseInt(useCacheCall('Poll', 'getNumAnswers', i))
    // const numAnswers = 1
    allQuestions.push({ question: questionStatement, numAnswers, index: i })
  }
  /*eslint-enable */
  // console.log(allQuestions)

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
