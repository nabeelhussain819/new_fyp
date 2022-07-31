import emailjs from '@emailjs/browser';
export const doLogin = (params) => {
  return fetch("http://localhost:5000/signin", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(params),
  });
};

export const doRegister = (params) => {
  return fetch("http://localhost:5000/signup", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(params),
  });
};

export const updateDataInStore = (data) => {
  const name = data.name.name;
  const id = data.name._id;
  const email = data.name.email;
  const verify = data.name.isVerified;
  const u_id = data.name.u_id;
  const phone = data.name.phone;
  const code = data.name.courseId;

  if (email === "admin@admin.com") {
    localStorage.setItem("data", "admin");
    localStorage.setItem("isAdmin", "Admin");
    localStorage.setItem("depart", "all");
  } else {
    const depart = data.name.deptId.department;
    localStorage.setItem("depart", depart);
    localStorage.setItem("data", name);
  }
  if (data.name.isTeacher === true) {
    localStorage.setItem("isTeacher", "teacher");
  }
  localStorage.setItem("token", JSON.stringify(data.token));
  localStorage.setItem("email", email);
  localStorage.setItem("u_id", u_id);
  localStorage.setItem("phone", phone);
  localStorage.setItem("code", code);
  localStorage.setItem("id", id);
};
