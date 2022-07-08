import React, { useState, useEffect } from "react";

export const ReadCourse = async () => {
  const response = await (await fetch("https://fyptes.herokuapp.com/courses"))
    .json()
    .then(function (result) {
      return result;
    });
  return response;
};
