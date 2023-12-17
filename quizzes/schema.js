import mongoose from "mongoose";

const quizSchema = new mongoose.Schema({
      title: {type: String, required: true},
      course: {type: String, required: true},
      availableFromDate: {type: Date, default: Date.UTC(2023, 0, 10)},
      availableUntilDate: {type: Date, default: Date.UTC(2023, 4, 15)},
      dueDate: {type: Date, default: Date.UTC(2023, 4, 15)},
      points: {type: Number, default: 100},
      timeLimit: {type: mongoose.Schema.Types.Mixed, default: 30},
      description: {type: String, default: "Quiz Description"},
      published: {type: Boolean, default: false},
      shuffleAnswers: {type: Boolean, default: false},
    },
    {collection: "quizzes"});

export default quizSchema;