const mongoose = require("mongoose");
const { Schema } = require("mongoose");
const CourseSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    semesterId: [
      {
        type: Schema.Types.ObjectId,
        ref: "Semes",
        required: true,
      },
    ],
    code: {
      type: String,
      required: true,
    },
    comment: [
      {
        type: String,
        required: false,
      },
    ],
    studentId: [
      {
        type: Schema.Types.ObjectId,
        ref: "Student",
        required: false,
      },
    ],
    teacherId: [
      {
        type: Schema.Types.ObjectId,
        ref: "Teacher",
        required: false,
      },
    ],
  },
  { timestamps: true }
);
const course = mongoose.model("Course", CourseSchema);

module.exports = course;
