import React, { useState, useEffect } from "react";

export const ReadSession = async () => {
  const response = await (await fetch("https://fyptes.herokuapp.com/sessions"))
    .json()
    .then(function (result) {
      return result;
    });
  return response;
};
