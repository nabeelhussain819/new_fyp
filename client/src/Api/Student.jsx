import React, { useState, useEffect } from "react";

export const ReadStudent = async () => {
  const response = await (await fetch("http://localhost:5000/students"))
    .json()
    .then(function (result) {
      return result;
    });
  return response;
};
