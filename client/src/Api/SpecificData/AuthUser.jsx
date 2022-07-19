export const AuthUser = async () => {
  const res = await fetch("http://localhost:5000/AuthUser", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      id: localStorage.getItem("id"),
    }),
  });
  const data = await res.json();
  if (res.status === 400 || !data) {
    console.log(data);
  } else if (res.status === 401) {
    console.log(data);
  } else {
    return data;
  }
};
export const AuthQec = async () => {
  const res = await fetch("http://localhost:5000/AuthQec", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      id: localStorage.getItem("id"),
    }),
  });
  const data = await res.json();
  if (res.status === 400 || !data) {
    console.log(data);
  } else if (res.status === 401) {
    console.log(data);
  } else {
    return data;
  }
};
export const AuthTeacherStudents = async () => {
  const res = await fetch("http://localhost:5000/AuthTeacherStudent", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      id: localStorage.getItem("id"),
    }),
  });
  const data = await res.json();
  if (res.status === 400 || !data) {
    console.log(data);
  } else if (res.status === 401) {
    console.log(data);
  } else {
    return data;
  }
};
export const AuthTeacherQec = async () => {
  const res = await fetch("http://localhost:5000/AuthTeacherQec", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      id: localStorage.getItem("id"),
    }),
  });
  const data = await res.json();
  if (res.status === 400 || !data) {
    console.log(data);
  } else if (res.status === 401) {
    console.log(data);
  } else {
    return data;
  }
};
export const AuthStudentRating = async () => {
  const res = await fetch("http://localhost:5000/AuthStudentRating", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      id: localStorage.getItem("id"),
    }),
  });
  const data = await res.json();
  if (res.status === 400 || !data) {
    console.log(data);
  } else if (res.status === 401) {
    console.log(data);
  } else {
    return data;
  }
};
export const AuthStudentProgram = async () => {
  const res = await fetch("http://localhost:5000/AuthStudentProgram", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      id: localStorage.getItem("id"),
    }),
  });
  const data = await res.json();
  if (res.status === 400 || !data) {
    console.log(data);
  } else if (res.status === 401) {
    console.log(data);
  } else {
    return data;
  }
};
export const AuthStudentDepartment = async () => {
  const res = await fetch("http://localhost:5000/AuthStudentDepartment", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      id: localStorage.getItem("id"),
    }),
  });
  const data = await res.json();
  if (res.status === 400 || !data) {
    console.log(data);
  } else if (res.status === 401) {
    console.log(data);
  } else {
    return data;
  }
};
export const AuthStudentCourse = async ({ semesterId }) => {
  const res = await fetch("http://localhost:5000/AuthStudentSemesterCourse", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      semesterId: semesterId,
    }),
  });
  const data = await res.json();
  if (res.status === 400 || !data) {
    console.log(data);
  } else if (res.status === 401) {
    console.log(data);
  } else {
    return data;
  }
};
export const AuthStudentTeacher = async () => {
  const res = await fetch("http://localhost:5000/AuthStudentTeacher", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      id: localStorage.getItem("id"),
    }),
  });
  const data = await res.json();
  if (res.status === 400 || !data) {
    console.log(data);
  } else if (res.status === 401) {
    console.log(data);
  } else {
    return data;
  }
};
