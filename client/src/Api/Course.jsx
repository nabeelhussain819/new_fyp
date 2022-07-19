import React, { useState, useEffect } from "react";

export const ReadCourse = async () => {
  const response = await (await fetch("http://localhost:5000/courses"))
    .json()
    .then(function (result) {
      return result;
    });
  return response;
};
