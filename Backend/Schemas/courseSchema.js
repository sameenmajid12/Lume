const mongoose = require("mongoose");
const blockSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
    enum: ["text", "image", "video", "quiz", "code"],
  },
  content: {
    type: String,
  },
  options: {
    type: [String],
  },
  correctAnswer: {
    type: String,
  },
  codeLanguage: {
    type: String,
  },
  order: {
    type: Number,
  },
});
const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  coverImage: { type: String },
  users: [{ type: mongoose.Schema.Types.ObjectId, ref: "Users" }],
  description: { type: String },
  blocks: [blockSchema],
  category: {
    type: String,
    required: true,
  },
  contributors: [{ type: mongoose.Schema.Types.ObjectId, ref: "Users" }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Courses", courseSchema);
