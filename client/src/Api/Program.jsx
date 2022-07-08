import React, { useState, useEffect } from "react";

export const ReadProgram = async () => {
  const response = await (await fetch("https://fyptes.herokuapp.com/programs"))
    .json()
    .then(function (result) {
      return result;
    });
  return response;
};
