import React from 'react'
import './Lp.css';
import ArrowDropUpOutlinedIcon from "@mui/icons-material/ArrowDropUpOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import Chars from './Chars';
import MiddRight from '../MiddleRightcomp/MiddRight';
export default function LastPart() {
    var obj_l = [
      {
        h3_: "Top Earning",
        h2_: "$12,875",
        h6_: "Compare to $21,490 last year ",
        sp_: "10%",
      },
      {
        h3_: "Sales",
        h2_: "$43,123",
        h6_: "Compare to $21,490 last year ",
        sp_: "12%",
      },
    ];
    var obj_2 = [
      { name: "Travel", num: "760", price: "2540" },
      { name: "Presentation", num: "650", price: "2304" },
      { name: "Business", num: "612", price: "2140" },
    ];
  return (
    <div className="LP">
      <div className="LeftLp">
        <h1 id="LPH"> Design faster</h1>
        {/* <div id="char_"></div> */}
        <Chars id="char_" />
        <div className="earning_total">
          {obj_l.map((e, i) => {
            var { h3_, h2_, h6_ } = e;
            // console.log(`_0${i}`);
            return (
              <div id={`_0${i}`} className="top_" key={i}>
                <h3 id="h3top">{h3_} </h3>
                <h1 id="h5top">
                  {" "}
                  {h2_}{" "}
                  <span id="h5s">
                    {" "}
                    <ArrowDropUpOutlinedIcon
                      sx={{
                        color: "#38F261",
                      }}
                    />{" "}
                    {e.sp_}
                  </span>
                </h1>
                <h6 id="h6top"> {h6_} </h6>
              </div>
            );
          })}
        </div>
        <div className="last_earning_total">
          {obj_2.map((e, i) => {
            if (i === 1) {
              return (
                <div className="col">
                  <div id="first">
                    {" "}
                    <h1 id="first_col">{e.name}</h1>{" "}
                  </div>
                  <div id="sec">
                    {" "}
                    <h1 id="first_col">{e.num}</h1>{" "}
                  </div>
                  <div id="third">
                    {" "}
                    <h1 id="first_col">{e.price}</h1>{" "}
                  </div>
                  <div id="four">
                    {" "}
                    <ArrowDropDownOutlinedIcon
                      sx={{
                        color: "#FF2D2E",
                      }}
                    />
                  </div>
                </div>
              );
            } else {
              return (
                <div className="col">
                  <div id="first">
                    {" "}
                    <h1 id="first_col">{e.name}</h1>{" "}
                  </div>
                  <div id="sec">
                    {" "}
                    <h1 id="first_col">{e.num}</h1>{" "}
                  </div>
                  <div id="third">
                    {" "}
                    <h1 id="first_col">{e.price}</h1>{" "}
                  </div>
                  <div id="four">
                    {" "}
                    <ArrowDropUpOutlinedIcon
                      sx={{
                        color: " #00B929",
                      }}
                    />
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
      <MiddRight className="RightLp" />
    </div>
  );
}
