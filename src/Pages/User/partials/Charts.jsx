import React, { useState, useEffect } from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Line, Bar } from "react-chartjs-2";
import { AuthTeacher } from "../../../Api/Teacher";

export default function LineChart(props) {
  const [rating, setRating] = useState([]);

  console.log(props.data.map((data) => data.isHelpfull.length));
  return (
    <div>
      <div>
        <div className="col-lg-12 responsive-column--m">
          <div className="form-box dashboard-card">
            <div className="form-content pb-0">
              <div className="dashboard-progressbar pb-4">
                <div className="progress">
                  <div
                    className="progress-bar progress-bar-striped"
                    role="progressbar"
                    style={{
                      width: `${props.data.map(
                        (data) => data.isHelpfull.length
                      )}%`,
                    }}
                    aria-valuenow="10"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <p className="font-size-14 pt-1">
                  Rating of Helpfull :{" "}
                  {props.data.map((data) => data.isHelpfull.length)}{" "}
                </p>
              </div>
              <div className="dashboard-progressbar pb-4">
                <div className="progress">
                  <div
                    className="progress-bar progress-bar-striped bg-success"
                    role="progressbar"
                    style={{
                      width: `${props.data.map(
                        (data) => data.isFriendly.length
                      )}%`,
                    }}
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <p className="font-size-14 pt-1">
                  Rating of Friendly:{" "}
                  {props.data.map((data) => data.isFriendly.length)}
                </p>
              </div>
              <div className="dashboard-progressbar pb-4">
                <div className="progress">
                  <div
                    className="progress-bar progress-bar-striped bg-info"
                    role="progressbar"
                    style={{
                      width: `${props.data.map(
                        (data) => data.isProfessional.length
                      )}%`,
                    }}
                    aria-valuenow="50"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <p className="font-size-14 pt-1">
                  Rating of Professsional:{" "}
                  {props.data.map((data) => data.isProfessional.length)}/100
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
