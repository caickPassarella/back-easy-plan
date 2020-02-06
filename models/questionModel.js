const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema(
  {
    planType: {
      type: String,
      enum: ["single-page", "complete", "custom"],
      required: [true, "type of the plan"]
    },
    title: {
      type: String,
      required: [true, "Title of the question"]
    },
    description: {
      type: String,
      required: [false, "Description of the question"]
    },
    component: {
      type: String,
      required: [true, "The component type, like textArea, simpleInput, radioButton, etc"],
      enum: ["textArea", "radioButton", "simpleInput", "checkbox"]
    },
    values: { type: Array, required: [true, "Value of the component"] },
    section: {
      type: String,
      required: [
        true,
        "Section of the question (idea, marketing, monetization, etc)"
      ]
    }
  },
  { versionKey: false }
);

const Question = mongoose.model("Question", questionSchema);
module.exports = Question;
