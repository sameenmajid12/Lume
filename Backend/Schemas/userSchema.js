const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  username: { type: String, required: true },
  password: { type: String, required: true },
  brains: {
    type: Number,
    default: 100,
  },
  enrolledCourses: { type: mongoose.Schema.Types.ObjectId, ref: "Courses" },
  createdCourses: { type: mongoose.Schema.Types.ObjectId, ref: "Courses" },
  contributedCourses: { type: mongoose.Schema.Types.ObjectId, ref: "Courses" },

});

module.exports = mongoose.model("Users", userSchema);
