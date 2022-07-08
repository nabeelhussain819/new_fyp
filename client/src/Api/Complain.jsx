import React, { useState, useEffect } from "react";

export const ReadComplain = async ({ api }) => {
  const response = await (await fetch("https://fyptes.herokuapp.com/complains-" + api))
    .json()
    .then(function (result) {
      return result;
    });
  return response;
};
