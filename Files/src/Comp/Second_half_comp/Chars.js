import React, { useState } from 'react'
import './chars.css'
import ArrowDropUpOutlinedIcon from "@mui/icons-material/ArrowDropUpOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import {Line} from 'react-chartjs-2'
import {Chart as ChartJS} from 'chart.js/auto';
import DiamondRoundedIcon from "@mui/icons-material/DiamondRounded";
// import { height } from '@mui/system';
export default function Chars({id}) {
  var list_items = [
    { name: "Presentation", num: "862" },
    { name: "Documentation", num: "753" },
    { name: "Research", num: "553" },
  ];
  
  const [userdata, setuserdata] = useState({
    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    datasets: [
      {
        label: "My First Dataset",
        data: [2, 4, 3, 5, 6, 3, 5, 4, 2, 3, 7],
        borderColor: "#8676FF",
        tension: 0.5,
        pointBorderColor: "transparent",
        pointBorderWidth: 4,
      },
    ],
  });
   const [userdata1] = useState({
     labels: [1, 2, 3, 4, 5, 6, 7, 8, 9],
     datasets: [
       {
         label: "My First Dataset",
         data: [2, 3, 4, 5, 4, 3, 3, 7, 8, 8,9],
         borderColor: "#FF708B",
         tension: 0.5,
         pointBorderColor: "transparent",
         pointBorderWidth: 4,
       },
     ],
   });
    const [userdata2] = useState({
      labels: [1, 4, 5, 6, 7, 1, 2, 1, 1],
      datasets: [
        {
          label: "My First Dataset",
          data: [2, 4, 3, 5, 6, 3, 5, 4, 2, 3, 7],
          borderColor: "#FFBA69",
          tension: 0.5,
          pointBorderColor: "transparent",
          pointBorderWidth: 4,
        },
      ],
    });
  const options={plugins:{
    legend:false
  },
  scales:{
    x:{
      grid:{
        display:false
      }
    },
    y:{
      min:2,
      max:10,
      ticks:{
        stepSize:2,
        callback:(value)=>value+'k'
      },
      grid:{
        borderDash:[10]
      }
    }

  }
}
  // datasets: [
  //   {
  //     label: "User Gained",
  //     data: Data.map((e) => e.company_lost),
  //     backgroundColor: ["red"],
  //   },
  // ];
  console.log(userdata);
  return (
    <div id={id}>
      <div id="fchar">
        <div className="circles__">
          <div id="c1">
            <div className="c3">
              <div id="c4">
                <div id="c5">
                  <DiamondRoundedIcon
                    sx={{
                      color: "#8676FF",
                      border: "2px solid #8676FF",
                      borderRadius: "50%",
                      textAlign: "center",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content">
          <h2 id="con1"> Total Earning</h2>
          <p id="con2">
            $12,875 <span id="spcon"> <ArrowDropUpOutlinedIcon   />   2%</span>
          </p>
          <p id="con3">Compare to $21,490 last year</p>
        </div>
      </div>
      <div id="schar">
        <div className="one_row">
          {list_items.map((e, i) => {
            return <div id="same"> {e.name}</div>;
          })}
        </div>
        <div className="sec_row">
          {list_items.map((e, i) => {
            return <div id="same">{e.num}</div>;
          })}
        </div>
        <div className="three_row">
          <div className="tro" style={{ width: "100%", height: "100%" }}>
            <Line id="same" data={userdata} options={options}></Line>
            <Line id="same" data={userdata1} options={options}></Line>
            <Line id="same" data={userdata2} options={options}></Line>
          </div>
        </div>
      </div>
    </div>
  );
}
