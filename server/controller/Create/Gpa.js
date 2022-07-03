const cgpa = require("../../Models/Cgpa");

exports.createCgpa = async (req, res) => {
  try {
    const data = {
      gpa: req.body.gpa,
      studentId: req.body.studentId,
      courseId: req.body.courseId,
      cgpa: 9.5 * req.body.gpa,
    };
    const Cgpa = await new cgpa(data);
    await Cgpa.save();
    res.status(200).json({ success: true });
  } catch (err) {
    console.log(err);
  }
};
