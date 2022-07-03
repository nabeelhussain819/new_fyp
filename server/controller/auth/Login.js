const student = require("../../Models/Student");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const teacher = require("../../Models/Teacher");

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400).json({ error: "add all feilds" });
    }
    const userLogin = await student
      .findOne({ email: req.body.email })
      .populate("deptId");
    const teacherLogin = await teacher
      .findOne({ email: req.body.email })
      .populate("deptId");
    if (userLogin) {
      const isMatch = await bcrypt.compare(password, userLogin.password);
      token = await userLogin.generateAuthToken();
      if (!isMatch) {
        res.status(400).json({ message: "Invalid Credentials" });
      } else {
        const token = jwt.sign({ _id: student._id }, process.env.KEY);
        const name = userLogin;
        res.send({
          token,
          name,
        });
      }
    } else if (teacherLogin) {
      const isMatch = await bcrypt.compare(password, teacherLogin.password);
      token = await teacherLogin.generateAuthToken();
      if (!isMatch) {
        res.status(400).json({ message: "Invalid Credentials" });
      } else {
        const token = jwt.sign({ _id: teacher._id }, process.env.KEY);
        const name = teacherLogin;
        res.send({
          token,
          name,
        });
      }
    } else if (email == "admin@admin.com" && password == "admin@123") {
      console.log("sss");
      const adminLogin = {
        email: "admin@admin.com",
        name: "admin",
      };
      const token = "admin";
      const name = adminLogin;
      res.send({
        token,
        name,
      });
    } else {
      res.status(400).json({ message: "Invalid Credentials" });
    }
  } catch (error) {
    console.log(error);
  }
};
