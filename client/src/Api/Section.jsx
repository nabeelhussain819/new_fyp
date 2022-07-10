import React, { useState, useEffect } from "react";

export const ReadSection = async () => {
  const response = await (await fetch("hhttp://localhost:5000/departments"))
    .json()
    .then(function (result) {
      return result;
    });
  return response;
};
