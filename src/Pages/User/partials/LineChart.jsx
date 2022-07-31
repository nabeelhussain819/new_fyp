import React, { useState, useEffect } from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Line, PolarArea } from "react-chartjs-2";
import { AuthTeacher } from "../../../Api/Teacher";
import { AuthTeacherQec } from "../../../Api/SpecificData/AuthUser";
export default function LineChart1({ data }) {
  const [rating, setRating] = useState([]);
  const [name, setName] = useState([]);

  const state = {
    labels: name.map((data) => data.courseId.map((data) => data.name)),
    datasets: [
      {
        label: "Qec Result Graph",
        fill: false,
        lineTension: 0.5,
        backgroundColor: "rgba(75,192,192,1)",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,
        data: name.map((data) => data.rating),
      },
    ],
  };

  useEffect(() => {
    const getData = () => {
      AuthTeacherQec().then(function (result) {
        setName(result);
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
              text: "Average rating per month",
              fontSize: 20,
            },
            legend: {
              display: true,
              position: "right",
            },
          }}
        />
      </div>
    </div>
  );
}
