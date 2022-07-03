const express = require("express");
const router = express.Router();
const app = express();
const cors = require("cors");
const multer = require("multer");
const {
  register,
  addDepartment,
  addProgram,
  addSemester,
  addSession,
  addSection,
} = require("../Controller/Auth/Register");
const { createCourse, deleteCourse } = require("../Controller/Create/Course");
const {
  createDept,
  getDepartment,
  deleteDepartment,
} = require("../Controller/Create/Department");
const {
  createProgram,
  deleteProgram,
} = require("../Controller/Create/Program");
const { createSection } = require("../Controller/Create/Section");
const { createSemes } = require("../Controller/Create/Semester");
const {
  createSession,
  deleteSession,
} = require("../Controller/Create/Session");
const { readCourse } = require("../Controller/Index/Course");
const { readDept } = require("../Controller/Index/Department");
const { readProgram } = require("../Controller/Index/Program");
const { section } = require("../Controller/Index/Section");
const { readSemes, deleteSemester } = require("../Controller/Index/Semester");
const { session } = require("../Controller/Index/Session");
const { student } = require("../Controller/Index/Student");
const { teacher } = require("../Controller/Index/Teacher");
const { login } = require("../Controller/Auth/Login");
const { Commend } = require("../Controller/Create/teacher");
const {
  departComplain,
  teacherComplain,
  courseComplain,
  programComplain,
  semesterComplain,
  getDeptComplain,
  getSemComplain,
  getCourseComplain,
  getTechComplain,
  getProgComplain,
  deleteComplains,
} = require("../Controller/Create/Complain");
const {
  departComment,
  teacherComment,
  courseComment,
  semesterComment,
  getTechComment,
  getSemComment,
  getDeptComment,
  getCourseComment,
  deleteComments,
} = require("../Controller/Create/Comment");

var storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, "../Controller");
  },
  filename: function (req, file, callback) {
    callback(null, file.originalname);
  },
});
var upload = multer({ storage: storage });
app.use(cors());
app.use(express.json());
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");
  next();
});
// for authentication
router.route("/signup").post(register);
router.route("/signin").post(login);
router.route("/add-department").post(addDepartment);
router.route("/add-program").post(addProgram);
router.route("/add-semester").post(addSemester);
router.route("/add-session").post(addSession);
router.route("/add-section").post(addSection);
// getting users data
router.route("/students").get(student);
router.route("/teachers").get(teacher);
router.route("/commend").post(Commend);
// for sessions
router.route("/sessions").get(session);
router.route("/create-session").post(createSession);
router.route("/delete-sessions").post(deleteSession);
//for department
router.route("/create-department").post(createDept);
router.route("/delete-departments").post(deleteDepartment);
router.route("/departments").get(readDept);
router.route("/get-depart").post(getDepartment);
// for semester
router.route("/create-semester").post(createSemes);
router.route("/delete-semesters").post(deleteSemester);
router.route("/semesters").get(readSemes);
// for course
router.route("/create-course").post(createCourse);
router.route("/delete-courses").post(deleteCourse);
router.route("/courses").get(readCourse);
// for program
// router.route("/create-program", upload.single("image")).post(createProgram);
router.route("/programs").get(readProgram);
router.route("/delete-programs").post(deleteProgram);
router.route("/create-program").post(createProgram);
// for section
router.route("/create-section").post(createSection);
router.route("/sections").get(section);
// for Complain
router.route("/complain-departments").post(departComplain);
router.route("/complain-teachers").post(teacherComplain);
router.route("/complian-courses").post(courseComplain);
router.route("/complain-programs").post(programComplain);
router.route("/complain-semesters").post(semesterComplain);
router.route("/complains-departments").get(getDeptComplain);
router.route("/complains-semesters").get(getSemComplain);
router.route("/complains-courses").get(getCourseComplain);
router.route("/complains-teachers").get(getTechComplain);
router.route("/complains-programs").get(getProgComplain);
router.route("/delete-complains").post(deleteComplains);
// for Comment
router.route("/comment-departments").post(departComment);
router.route("/comment-teachers").post(teacherComment);
router.route("/comment-courses").post(courseComment);
router.route("/comment-semesters").post(semesterComment);
router.route("/comments-departments").get(getDeptComment);
router.route("/comments-semesters").get(getSemComment);
router.route("/comments-courses").get(getCourseComment);
router.route("/comments-teachers").get(getTechComment);
router.route("/delete-comments").post(deleteComments);

module.exports = router;
