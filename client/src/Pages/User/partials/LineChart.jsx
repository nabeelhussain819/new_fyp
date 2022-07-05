import React,{useState,useEffect} from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Line,Bar } from "react-chartjs-2";
import { AuthTeacher } from "../../../Api/Teacher";



export default function LineChart1({data}){
  const [rating ,setRating] =useState([])
  const [name ,setName] =useState([])
  const state = {
    labels: ["1", "2", "3", "4", "5","6","7","8","9","10","10+"],
    datasets: [
      {
        label: "Todays rating of your Professionalism",
        fill: false,
        lineTension: 0.5,
        backgroundColor: "rgba(75,192,192,1)",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,
        data: name.isProfessional,
      },
    ],
  };

  console.log(name)
  useEffect(()=>{
    const getData = () => {
        AuthTeacher().then(function (result) {
          result.map((data)=> data == false ? null : setName(data))
        });
      };
    
      getData();
},[])
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
        /></div>
      </div>
    );
  }

