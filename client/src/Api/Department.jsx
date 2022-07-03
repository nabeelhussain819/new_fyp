import React, { useState, useEffect } from "react";

export const ReadDepartment = async () => {
  const response = await (
    await fetch("http://localhost:5000/departments")
  )
    .json()
    .then(function (result) {
      return result;
    });
  return response;
};
export const GetSession = async ({ data }) => {
  const response = await (await fetch("http://localhost:5000/departments"))
    .json()
    .then(function (result) {
      const ans = result.map((item) =>
      item._id == data && item 
      );
      return ans;
    });
  return response;
};
export const GetProgram = async ({ data }) => {
  const response = await (await fetch("http://localhost:5000/sessions"))
    .json()
    .then(function (result) {
      const ans = result.map((item) =>    
      item._id == data && item 
      );
      return ans;
    });
  return response;
};
export const GetSemester = async ({ data }) => {
  const response = await (await fetch("http://localhost:5000/programs"))
    .json()
    .then(function (result) {
      const ans = result.map((item) =>    
     
      item._id == data && item 
      );
      return ans;
    });
  return response;
};
export const GetCourse = async ({ data }) => {
  const response = await (await fetch("http://localhost:5000/Semesters"))
    .json()
    .then(function (result) {
      const ans = result.map((item) =>    
     
      item._id == data && item 
      );
      return ans;
    });
  return response;
};