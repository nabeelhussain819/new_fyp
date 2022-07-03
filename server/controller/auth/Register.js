const teacher = require("../../Models/Teacher");
const session = require("../../Models/Session");
const program = require("../../Models/Program");
const semester = require("../../Models/Semester");
const section = require("../../Models/Section");
const department = require("../../Models/Department");
const student = require("../../Models/Student");

exports.register = async (req, res, next) => {
  const { email, password, phone, u_id, name } = req.body;
  const existingUserU = await student.findOne({ u_id: u_id });
  const existingUser = await student.findOne({ email: email });
  const existingUserPhone = await student.findOne({ phone: phone });
  var term = req.body.u_id;
  var user = new RegExp(/[A-Z]{3,}-[0-9]{2,2}[FS]-[0-9]{3,3}/gm);
  var re = new RegExp(/[TEC]{3,}-[0-9]{2,2}[FS]-[0-9]{3,3}/gm);
  var emailRegex = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})$/gm);
  if (!email || !password || !phone || !u_id || !name) {
    res.status(400).json({ error: "add all feilds" });
  } else if (password.length < 5) {
    return res
      .status(400)
      .json({ error: "The password needs to be at least 5 characters long." });
  } else if (existingUser) {
    return res
      .status(400)
      .json({ error: "An account with this email already exists." });
  } else if (!emailRegex.test(req.body.email)) {
    return res.status(400).json({ error: "Invalid email." });
  } else if (existingUserU) {
    return res
      .status(400)
      .json({ error: "An account with this University Id already exists." });
  } else if (existingUserPhone) {
    return res
      .status(400)
      .json({ error: "An account with this Phone Number already exists." });
  } else if (re.test(term)) {
    const data = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      u_id: req.body.u_id,
      phone: req.body.phone,
      isTeacher: true,
    };
    const Teacher = new teacher(data);
    await Teacher.save();
    res.status(200).json(Teacher);
  } else if (user.test(term)) {
    const myArray = term.split("-");
    const userSession = myArray[1][2];
    const Depart = await department.find({ code: myArray[0] });
    const Session = await session.find({});
    const deptCode = Depart.map((data) => data.code);
    const deptId = Depart.map((data) => data._id);
    const SessionMaped = Session.map((data) => [data["name"][0]]);
    const hh = userSession.toLowerCase();
    console.log(
      userSession.toLowerCase(),
      SessionMaped.map((data) => data[0])
    );
    if (myArray[0] == deptCode) {
      const Student = new student(req.body);
      await Student.save();
      const studentId = Student._id;
      const Student1 = await student.findById({ _id: Student._id });
      Student1.deptId.push(deptId);
      await Student1.save();
      const Departs = await department.findById({ _id: deptId });
      Departs.studentId.push(studentId);
      await Departs.save();

      res.status(200).json(Student);
    } else {
      return res.status(400).json({ error: "ID isnot valid" });
    }
  } else {
    return res.status(400).json({ error: "ID isnot valid" });
  }
};
exports.addDepartment = async (req, res, next) => {
  console.log(req.body);
  const { deptId, studentId, teacherId } = req.body;
  if (!deptId) {
    return res
      .status(400)
      .json({ error: "An account with this email already exists." });
  } else {
    res.status(200).json({ message: "registerd" });
    if (teacherId) {
      const Teacher = await teacher.findById({ _id: teacherId });
      Teacher.deptId.push(req.body.deptId);
      await Teacher.save();

      const Depart = await department.findById({ _id: deptId });
      Depart.teacherId.push(teacherId);
      await Depart.save();
    } else {
      const Student = await student.findById({ _id: studentId });
      Student.deptId.push(req.body.deptId);
      await Student.save();

      const Depart = await department.findById({ _id: deptId });
      Depart.studentId.push(studentId);
      await Depart.save();
    }
  }
};
exports.addProgram = async (req, res, next) => {
  const { programId, studentId, teacherId } = req.body;
  if (!programId) {
    return res
      .status(400)
      .json({ error: "An account with this email already exists." });
  } else {
    res.status(200).json({ message: "registerd" });
    if (teacherId) {
      const Teacher = await teacher.findById({ _id: teacherId });
      Teacher.programId.push(req.body.programId);
      await Teacher.save();

      const Program = await program.findById({ _id: programId });
      Program.teacherId.push(teacherId);
      await Program.save();
    } else {
      const Student = await student.findById({ _id: studentId });
      Student.programId.push(programId);
      await Student.save();

      const Program = await program.findById({ _id: programId });
      Program.studentId.push(studentId);
      await Program.save();
    }
  }
};
exports.addSemester = async (req, res, next) => {
  const { semesterId, studentId, teacherId } = req.body;
  if (!semesterId) {
    return res
      .status(400)
      .json({ error: "An account with this email already exists." });
  } else {
    res.status(200).json({ message: "registerd" });
    const Student = await student.findById({ _id: studentId });
    Student.semesterId.push(semesterId);
    await Student.save();

    const Semester = await semester.findById({ _id: semesterId });
    Semester.studentId.push(studentId);
    await Semester.save();
  }
};
exports.addSection = async (req, res, next) => {
  const { sectionId, studentId } = req.body;
  if (!sectionId) {
    return res
      .status(400)
      .json({ error: "An account with this email already exists." });
  } else {
    res.status(200).json({ message: "registerd" });
    const Student = await student.findById({ _id: studentId });
    Student.sectionId.push(sectionId);
    await Student.save();

    const Section = await section.findById({ _id: sectionId });
    Section.studentId.push(studentId);
    await Section.save();
  }
};
exports.addSession = async (req, res, next) => {
  const { sessionId, studentId, teacherId } = req.body;

  if (!sessionId) {
    return res
      .status(400)
      .json({ error: "An account with this email already exists." });
  } else {
    res.status(200).json({ message: "registerd" });
    if (teacherId) {
      const Teacher = await teacher.findById({ _id: teacherId });
      Teacher.sessionId.push(req.body.sessionId);
      await Teacher.save();
      const Session = await session.findById({ _id: sessionId });
      Session.teacherId.push(teacherId);
      await Session.save();
    } else {
      const Student = await student.findById({ _id: studentId });
      Student.sessionId.push(sessionId);
      await Student.save();

      const Session = await session.findById({ _id: sessionId });
      Session.studentId.push(studentId);
      await Session.save();
    }
  }
};
