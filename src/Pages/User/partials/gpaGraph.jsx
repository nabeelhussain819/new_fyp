import React, { useState, useEffect } from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Line, Bar } from "react-chartjs-2";
import { AuthStu, AuthStudentRating } from "../../../Api/SpecificData/AuthUser";

export default function GpaGraph({ data, qec }) {
  const [rating, setRating] = useState([]);
  console.log(rating.map((data) => data.rating));
  const state = {
    labels: rating.map((data) => data.teacherId.map((data) => data.name)),
    datasets: [
      {
        label: "Todays rating of your friendly",
        fill: false,
        lineTension: 0.5,
        backgroundColor: "rgba(75,192,192,1)",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,
        data: rating.map((data) => data.rating),
      },
    ],
  };
  useEffect(() => {
    const getData = () => {
      AuthStudentRating().then(function (result) {
        setRating(result);
      });
    };
    getData();
  }, []);
  return (
    <div className="form-box">
      <div className="form-content">
        <Line
          data={state}
          options={{
            title: {
              display: true,
              text: "Average Rating per month",
              fontSize: 20,
            },
            legend: {
              display: true,
              position: "right",
            },
          }}
        />{" "}
      </div>
    </div>
  );
}
