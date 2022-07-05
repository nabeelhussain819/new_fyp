import React,{useState,useEffect} from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Line,Bar } from "react-chartjs-2";
import { AuthTeacher } from "../../../Api/Teacher";
import { ReadStudent } from "../../../Api/Student";



export default function LineChart2(){
  const [rating ,setRating] =useState([])
  const [name ,setName] =useState([])

  const state = {
    
    labels:  ['jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: "Students Engaging",
        fill: true,
        lineTension: 0.5,
        backgroundColor: "rgba(75,192,192,1)",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,
        data: [0,0,0,0,0,0,name.length],
      },
    ],
  };

  useEffect(()=>{
    const getData = () => {
        ReadStudent().then(function (result) {
         setName(result)
        });
      };
    
      getData();
},[])
    return (
      <div className="form-box">
        <div className="form-content">
        <Bar
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
        /></div>
      </div>
    );
  }

