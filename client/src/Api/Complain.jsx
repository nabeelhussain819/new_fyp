import React, { useState, useEffect } from "react";

export const ReadComplain = async () => {
  const response = await (await fetch("http://localhost:5000/get-complain"))
    .json()
    .then(function (result) {
      return result;
    });
  return response;
};
