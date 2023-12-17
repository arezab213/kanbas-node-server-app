import model from "./model.js";

export const createAssignment = (assignment) => model.create(assignment);
export const findAssignmentsByCourseId = (courseId) => model.find(
    {course: courseId});
export const updateAssignment = (assignmentId, assignment) =>
    model.updateOne({_id: assignmentId}, {$set: assignment});
export const deleteAssignment = (assignmentId) => model.deleteOne(
    {_id: assignmentId})
;