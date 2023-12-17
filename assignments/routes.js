import * as dao from "./dao.js";

function AssignmentRoutes(app) {
  const findAssignmentsByCourseId = async (req, res) => {
    const assignments = await dao.findAssignmentsByCourseId(
        req.params.courseId);
    res.json(assignments);
  };

  const createAssignment = async (req, res) => {
    const {courseId, assignmentId} = req.params;
    const assignment = await dao.createAssignment(
        {...req.body, _id: assignmentId, course: courseId});
    res.json(assignment);
  };

  const deleteAssignment = async (req, res) => {
    const status = await dao.deleteAssignment(req.params.assignmentId);
    res.json(status);
  };

  const updateAssignment = async (req, res) => {
    const status = await dao.updateAssignment(req.params.assignmentId,
        req.body);
    res.json(status)
  }

  app.get("/api/courses/:courseId/assignments", findAssignmentsByCourseId);
  app.post("/api/courses/:courseId/assignments/:assignmentId",
      createAssignment);
  app.delete("/api/assignments/:assignmentId", deleteAssignment);
  app.put("/api/assignments/:assignmentId", updateAssignment)
}

export default AssignmentRoutes;