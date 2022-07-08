import React, { useState, useEffect } from "react";

export const ReadComment = async ({ api }) => {
  const response = await (await fetch("https://fyptes.herokuapp.com/comments-" + api))
    .json()
    .then(function (result) {
      return result;
    });
  return response;
};
