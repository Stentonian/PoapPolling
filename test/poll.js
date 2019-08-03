const Verifier = artifacts.require("./Verifier.sol");
const Poll = artifacts.require("./Poll.sol");

contract("Poll", accounts => {
  
let verifier;
let poll;

beforeEach(async () => {
    verifier = await Verifier.new();
    poll  = await Poll.new(verifier.address);
});
  
  it("...testingtesting123", async () => {
    const questionText = "Is this a test question?"

    // set the question text

    const questionId = await poll.addQuestion.call(questionText)
    assert.equal(questionId, 0, "Invalid question ID returned")

    await poll.addQuestion(questionText)

    // Get stored value
    const storedData = await poll.getQuestion.call(questionId)

    assert.equal(storedData, questionText, "The question text was not stored correctly.");
  });
});
