const Student = require("../../models/Student");

exports.student = async (req, res, next) => {
  Student.find({})
    .populate({
      path: "deptId",
    })  .populate("courseId")
    .populate("sessionId")
    .populate("semesterId")
    .populate("programId")
    .populate("qec")
    .exec((err, data) => {
      if (err) {
        throw err;
      }
      res.json(data);
    });
};
