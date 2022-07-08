import React, { useState, useEffect } from "react";

export const ReadDepartment = async () => {
  const response = await (
    await fetch("https://fyptes.herokuapp.com/departments")
  )
    .json()
    .then(function (result) {
      return result;
    });
  return response;
};
export const GetSession = async ({ data }) => {
  const response = await (await fetch("https://fyptes.herokuapp.com/departments"))
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
  const response = await (await fetch("https://fyptes.herokuapp.com/sessions"))
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
  const response = await (await fetch("https://fyptes.herokuapp.com/programs"))
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
  const response = await (await fetch("https://fyptes.herokuapp.com/Semesters"))
    .json()
    .then(function (result) {
      const ans = result.map((item) =>    
     
      item._id == data && item 
      );
      return ans;
    });
  return response;
};
export const GetSpecificCourse = async ({ data }) => {
  const response = await (await fetch("https://fyptes.herokuapp.com/Courses"))
    .json()
    .then(function (result) {
      const ans = result.map((item) =>    
     
      item._id == data && item 
      );
      return ans;
    });
  return response;
};