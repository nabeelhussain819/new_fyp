const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CgpaSchema = new Schema(
  {
    gpa: {
      type: Number,
      required: true,
      unique: true,
    },
    courseId: [
      {
        type: Schema.Types.ObjectId,
        ref: "Course",
        required: false,
      },
    ],
    cgpa: {
      type: Number,
      required: false,
    },
    studentId: [
      {
        type: Schema.Types.ObjectId,
        ref: "Student",
        required: false,
      },
    ],
  },
  { timestamps: true }
);

const cgpa = mongoose.model("Cgpa", CgpaSchema);

module.exports = cgpa;
