import React, { useState, useEffect } from "react";

export const ReadSession = async () => {
  const response = await (await fetch("http://localhost:5000/sessions"))
    .json()
    .then(function (result) {
      return result;
    });
  return response;
};
