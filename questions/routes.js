import * as dao from "./dao.js";

function QuestionRoutes(app) {
  const findQuestionsByQuizId = async (req, res) => {
    const questions = await dao.findQuestionsByQuizId(
        req.params.quizId);
    res.json(questions);
  };

  const findQuestionById = async (req, res) => {
    const question = await dao.findQuestionById(req.params.questionId);
    res.json(question);
  };

  const createQuestion = async (req, res) => {
    const {quizId} = req.params;
    const question = await dao.createQuestion(
        {...req.body, quiz: quizId});
    res.json(question);
  };

  const deleteQuestion = async (req, res) => {
    const status = await dao.deleteQuestion(req.params.questionId);
    res.json(status);
  };

  const updateQuestion = async (req, res) => {
    const status = await dao.updateQuestion(req.params.questionId, req.body);
    res.json(status)
  }

  app.get("/api/quizzes/:quizId/questions", findQuestionsByQuizId);
  app.get("/api/questions/:questionId", findQuestionById);
  app.post("/api/quizzes/:quizId/questions", createQuestion);
  app.delete("/api/questions/:questionId", deleteQuestion);
  app.put("/api/questions/:questionId", updateQuestion)
}

export default QuestionRoutes;