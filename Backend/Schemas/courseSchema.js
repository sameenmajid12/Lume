const mongoose = require("mongoose");
const blockSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      required: true,
      enum: ["text", "image", "video", "quiz", "code", "list"],
    },
    content: {
      text: {
        type: String,
        required: function () {
          return this.type === "text";
        },
      },
      imageUrl: {
        type: String,
        required: function () {
          return this.type === "image";
        },
      },
      videoUrl: {
        type: String,
        required: function () {
          return this.type === "video";
        },
      },
      listItems: {
        type: [String],
        required: function () {
          return this.type === "list";
        },
      },
      questions: [
        {
          question: {
            type: String,
            required: function () {
              return this.type === "quiz";
            },
          },
          options: {
            type: [String],
            required: function () {
              return this.type === "quiz";
            },
          },
          correctAnswer: {
            type: String,
            required: function () {
              return this.type === "quiz";
            },
          },
        },
      ],
      maxScore: {
        type: Number,
        required: function () {
          return this.type === "quiz";
        },
      },
    },
    properties: {
      mediaSize: {
        type: String,
        required: function () {
          return ["image", "video"].includes(this.type);
        },
      },
      fontSize: { type: String, default: "16px" },
      alignment: { type: String, default: "left" },
      font: { type: String, default: "Arial" },
      lineHeight: { type: String, default: "1.5" },
      bold: { type: Boolean, default: false },
      italics: { type: Boolean, default: false },
    },
    order: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
blockSchema.path("content.questions").validate(function (val) {
  if (this.type === "quiz") {
    return val && val.length > 0;
  }
  return true;
}, "At least one question is required");
const courseSchema = new mongoose.Schema(
  {
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
    subcategory: {
      type: String,
      required: true,
    },
    contributors: [{ type: mongoose.Schema.Types.ObjectId, ref: "Users" }],
  },
  {
    timestamps: true,
  }
);

courseSchema.index({ title: 1 });
courseSchema.index({ category: 1, subcategory: 1 });

module.exports = mongoose.model("Courses", courseSchema);
