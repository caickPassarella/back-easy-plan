const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title of the question"]
  },
  description: {
    type: String,
    required: [false, "Description of the question"]
  },
  category: {
      type: String,
      required: [true, "Category of the question (textArea, simpleInput, dropdown, select, etc)"]
  },
  section: {
      type: String,
      required: [true, "Section of the question (idea, marketing, monetization, etc)"]
  }
});

const Question = mongoose.model('Question', questionSchema);
module.exports = Question;