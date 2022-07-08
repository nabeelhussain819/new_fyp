import React, { useState, useEffect } from "react";

export const ReadSection = async () => {
  const response = await (
    await fetch("hhttps://fyptes.herokuapp.com/departments")
  )
    .json()
    .then(function (result) {
      return result;
    });
  return response;
};
