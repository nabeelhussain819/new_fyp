import React, { useState, useEffect } from "react";

export const ReadTeacher = async () => {
  const response = await (await fetch("http://localhost:5000/teachers"))
    .json()
    .then(function (result) {
      return result;
    });
  return response;
};
export const AuthTeacher = async () => {
  const response = await (await fetch("http://localhost:5000/teachers"))
    .json()
    .then(function (result) {
      const ans = result.map(
        (item) => item._id == localStorage.getItem("id") && item
      );
      return ans;
    });
  return response;
};
