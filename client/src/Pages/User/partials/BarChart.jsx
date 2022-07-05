import React,{useState,useEffect} from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Line,Bar } from "react-chartjs-2";
import { AuthTeacher } from "../../../Api/Teacher";



export default function BarChart(props){
  const [rating ,setRating] =useState([])

console.log(props.data.map((data)=>data.tokens.length))
    return (
      <div >
        <div >
        <div class="col-lg-12 responsive-column--m">
                        <div class="form-box dashboard-card">                         
                            <div class="form-content pb-0">
                                <div class="dashboard-progressbar pb-4">
                                    <div class="progress">
                                        <div class="progress-bar progress-bar-striped" role="progressbar" style={{width: `${(props.data.map((data)=>data.tokens.length))}%`}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <p class="font-size-14 pt-1">Rating of Helpfull : {props.data.map((data)=>data.tokens.length)} </p>
                                </div>
                                 <div class="dashboard-progressbar pb-4">
                                     <div class="progress">
                                         <div class="progress-bar progress-bar-striped bg-success" role="progressbar" style={{width: `${props.data.map((data)=>data.tokens.length)}%`}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                     </div>
                                     <p class="font-size-14 pt-1">Rating of Friendly: {props.data.map((data)=>data.tokens.length)}</p>
                                </div>
                                 <div class="dashboard-progressbar pb-4">
                                     <div class="progress">
                                         <div class="progress-bar progress-bar-striped bg-info" role="progressbar" style={{width: `${props.data.map((data)=>data.tokens.length)}%`}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                     </div>
                                     <p class="font-size-14 pt-1">Rating of Professsional: {props.data.map((data)=>data.tokens.length)}/100</p>
                                </div>                               
                            </div>
                        </div>
                    </div>
                    </div>
      </div>
    );
  }

