const Sessions = require("../../Models/Session");

exports.session = async (req, res) => {
  Sessions.find({})
    .populate("programId")
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
