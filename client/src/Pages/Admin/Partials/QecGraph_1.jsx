import React, { useState, useEffect } from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Line, Bar } from "react-chartjs-2";
import { AuthTeacher } from "../../../Api/Teacher";
import { ReadMidQec, ReadFinalQec } from "../../../Api/Qec";
export default function QecFinalChart() {
  const [name, setName] = useState([]);
  const state = {
    labels: name.map((data) => data.courseId.map((data) => data.name)),

    datasets: [
      {
        label: "Rating Of Evaluation From Final",
        fill: true,
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
      ReadFinalQec().then(function (result) {
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
              text: "Average Rating per month",
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
