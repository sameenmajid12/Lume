const mongoose = require("mongoose");
const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  users: [{ type: mongoose.Schema.Types.ObjectId, ref:"Users" }],
  description: { type: String},
  blocks: {
    type: Number,
    default: 100,
  },
  contributors:[{ type: mongoose.Schema.Types.ObjectId, ref:"Users" }]

});

module.exports = mongoose.model("Courses", courseSchema);
