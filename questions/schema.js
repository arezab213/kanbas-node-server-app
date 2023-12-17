import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
      title: {type: String, required: true},
      question: {type: String, required: true},
      points: {type: Number, required: true, default: 10},
      questionType: {
        type: String,
        enum: ["MC", "TF", "FIB"],
        default: "MC"
      },
      quiz: {type: String, required: true},
      options: [
        {
          text: {type: String, required: true},
          isCorrect: {type: Boolean, required: true}
        }
      ]
    },
    {collection: "questions"});

export default questionSchema;