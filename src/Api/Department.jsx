import React, { useState, useEffect } from "react";

export const ReadDepartment = async () => {
  const response = await (
    await fetch("https://new819.herokuapp.com/departments")
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
        item._id == [data] ? item : "not Found"
      );
      return ans;
    });
  return response;
};
