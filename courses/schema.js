import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
      name: {type: String, required: true},
      number: {type: String, required: true},
      startDate: {type: Date},
      endDate: {type: Date},
      department: {type: String, default: "D123"},
      credits: {type: Number, default: 4},
      description: {type: String, default: "Course Description"}
    },
    {collection: "courses"});

export default courseSchema;