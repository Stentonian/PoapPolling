const Verifier = artifacts.require("./Verifier.sol");
const Poll = artifacts.require("./Poll.sol");

contract("Poll", accounts => {
  
    let verifier;
    let poll;

    const addQuestion = async () => {
        const questionText = "Is this a test question?"

        const questionId = await poll.addQuestion.call(questionText, 18000, "Team", "ETHIndia")
        assert.equal(questionId, 0, "Invalid question ID returned")

        await poll.addQuestion(questionText, 18000, "Team", "ETHIndia")

        return questionId
    }

    beforeEach(async () => {
        verifier = await Verifier.new();
        poll  = await Poll.new(verifier.address);
    });
  
    it("...adding question", async () => {
        const questionId = await addQuestion()
        const storedData = await poll.getQuestion.call(questionId)
        assert.equal(storedData, "Is this a test question?", "The question text was not stored correctly.");
    });

    it("...adding answer", async () => {
        const questionId = await addQuestion()
        const answerText = "This is an answer"

        const answerId = await poll.addAnswer.call(questionId, answerText)
        assert.equal(answerId, 0, "Invalid answer ID returned")

        await poll.addAnswer(questionId, answerText)

        const storedData = await poll.getAnswer.call(questionId, answerId)
        assert.equal(storedData, answerText)
    });

});
