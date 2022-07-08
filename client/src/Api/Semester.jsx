import React, { useState, useEffect } from "react";

export const ReadSemester = async () => {
  const response = await (await fetch("https://fyptes.herokuapp.com/semesters"))
    .json()
    .then(function (result) {
      return result;
    });
  return response;
};
