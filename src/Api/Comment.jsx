import React, { useState, useEffect } from "react";

export const ReadComment = async ({ api }) => {
  const response = await (await fetch("http://localhost:5000/comments-" + api))
    .json()
    .then(function (result) {
      return result;
    });
  return response;
};
