const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  planType: {
    type: String,
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
  category: {
    component: { type: String, required: [true, "The component type, like textArea, simpleInput, radioButton, etc"] },
    values: { type: Array, required: [true, "Value of the component"] }
  },
  section: {
    type: String,
    required: [true, "Section of the question (idea, marketing, monetization, etc)"]
  }
});

const Question = mongoose.model('Question', questionSchema);
module.exports = Question;