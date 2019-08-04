var Poll = artifacts.require("./Poll.sol");
var Verifier = artifacts.require("./Verifier.sol");

module.exports = function (deployer) {

  deployer.deploy(Verifier).then(async function () {
    await deployer.deploy(Poll, Verifier.address)
    const poll = await Poll.deployed()

    console.log("Address of Verifier contract: " + Verifier.address)
    console.log("Address of Poll contract: " + Poll.address)

    const questionText = "Is this a test question?"
    const questionId = await poll.addQuestion.call(questionText, 18000)
    await poll.addQuestion(questionText, 18000)

    var answerText = "This is an answer 1"
    await poll.addAnswer(questionId, answerText)

    answerText = "This is an answer 2"
    await poll.addAnswer(questionId, answerText)

    answerText = "This is an answer 3"
    await poll.addAnswer(questionId, answerText)

    const questionText2 = "Is this a test question, number 2?"
    const questionId2 = await poll.addQuestion.call(questionText2, 18000)
    await poll.addQuestion(questionText2, 18000)

    var answerText = "This is an answer 1"
    await poll.addAnswer(questionId2, answerText)

    answerText = "This is an answer 2"
    await poll.addAnswer(questionId2, answerText)

    answerText = "This is an answer 3"
    await poll.addAnswer(questionId2, answerText)

    return 'done'
  });
};
