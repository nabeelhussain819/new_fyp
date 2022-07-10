import React, { useState, useEffect } from "react";

export const ReadComplain = async ({ api }) => {
  const response = await (await fetch("http://localhost:5000/complains-" + api))
    .json()
    .then(function (result) {
      return result;
    });
  return response;
};
