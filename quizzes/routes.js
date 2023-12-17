import * as dao from "./dao.js";

function QuizRoutes(app) {
  const findQuizzesByCourseId = async (req, res) => {
    const quizzes = await dao.findQuizzesByCourseId(
        req.params.courseId);
    res.json(quizzes);
  };

  const findQuizById = async (req, res) => {
    const quiz = await dao.findQuizById(req.params.quizId);
    res.json(quiz);
  };

  const createQuiz = async (req, res) => {
    const {courseId, quizId} = req.params;
    const quiz = await dao.createQuiz(
        {...req.body, _id: quizId, course: courseId});
    res.json(quiz);
  };

  const deleteQuiz = async (req, res) => {
    const status = await dao.deleteQuiz(req.params.quizId);
    res.json(status);
  };

  const updateQuiz = async (req, res) => {
    const status = await dao.updateQuiz(req.params.quizId,
        req.body);
    res.json(status)
  }

  app.get("/api/courses/:courseId/quizzes", findQuizzesByCourseId);
  app.get("/api/quizzes/:quizId", findQuizById);
  app.post("/api/courses/:courseId/quizzes/:quizId", createQuiz);
  app.delete("/api/quizzes/:quizId", deleteQuiz);
  app.put("/api/quizzes/:quizId", updateQuiz)
}

export default QuizRoutes;