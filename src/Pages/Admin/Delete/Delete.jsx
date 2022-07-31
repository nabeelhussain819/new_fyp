import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

function Delete({ id, api }) {
  const Navigate = useNavigate();

  const onDelete = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:5000/delete-" + api, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        id,
      }),
    });
    const data = await res.json();
    if (res.status === 400 || !data) {
      toast.warning("Add All feilds");
    } else if (res.status === 401) {
      toast.warning("Invalid entry!");
    } else {
      Navigate("../" + api);
      alert("Deleted Successfully");
      window.location.reload();
    }
  };

  return (
    <>
      <button
        variant="danger"
        className="bg-transparent border-0 text-danger hidden-print p-1"
        onClick={onDelete}
      >
        <i className="la la-trash mr-1"></i>
      </button>
    </>
  );
}

export default Delete;
