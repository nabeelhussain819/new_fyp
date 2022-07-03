const depart = require("../../Models/Department");

exports.readDept = async (req, res, next) => {
  depart
    .find({})
    .populate("programId")
    .populate("sessionId")
    .populate("studentId")
    .populate("teacherId")
    .exec((err, data) => {
      if (err) {
        throw err;
      }
      res.json(data);
    });
};
