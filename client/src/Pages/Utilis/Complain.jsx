import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Comment from "./Comment";

const Complain = ({ data, api }) => {
  return (
    <div className="col-lg-4">
      <Comment data={data} api={api} />
    </div>
  );
};

export default Complain;
