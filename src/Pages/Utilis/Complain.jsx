import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Comment from "./Comment";

const Complain = ({ data, api }) => {
  return (
    
      <Comment data={data} api={api} />
    
  );
};

export default Complain;
