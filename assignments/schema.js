import mongoose from "mongoose";

const assignmentSchema = new mongoose.Schema({
      title: {type: String, required: true},
      course: {type: String, required: true},
      availableFromDate: {type: Date, default: Date.UTC(2023, 0, 10)},
      availableUntilDate: {type: Date, default: Date.UTC(2023, 4, 15)},
      dueDate: {type: Date, default: Date.UTC(2023, 4, 15)},
      points: {type: Number, default: 100},
      description: {type: String, default: "Assignment Description"}
    },
    {collection: "assignments"});

export default assignmentSchema;