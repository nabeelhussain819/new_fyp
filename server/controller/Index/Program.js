const program = require("../../Models/Program");

exports.readProgram = async (req, res) => {
  program
    .find({})
    .populate("semesterId")
    .populate("sessionId")
    .populate("departmentId")
    .populate("studentId")
    .populate("teacherId")
    .exec((err, data) => {
      if (err) {
        throw err;
      }
      res.json(data);
    });
};
