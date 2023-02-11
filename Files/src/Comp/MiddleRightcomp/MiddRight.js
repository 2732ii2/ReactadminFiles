import React from 'react'
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import LeaderboardOutlinedIcon from "@mui/icons-material/LeaderboardOutlined";
import CropSquareTwoToneIcon from "@mui/icons-material/CropSquareTwoTone";
import UsbTwoToneIcon from "@mui/icons-material/UsbTwoTone";
import AdjustTwoToneIcon from "@mui/icons-material/AdjustTwoTone";
import AccountTreeTwoToneIcon from "@mui/icons-material/AccountTreeTwoTone";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import './rightpart.css';
function MiddRight({className}) {
    var obj_list=["1W","1M","3M","1Y","ALL"];
    function caller(e){
      var v = e.target;
      v.style.transition="all .3s";
      var slarr=(v.parentElement.childNodes);
      console.log(slarr);
      slarr.forEach((e)=>{
          console.log(e);
          e.style.background="transparent";
          e.style.fontSize = "14px";
          e.style.color = "black";
      })
      v.style.width="53px";
      v.style.height = "32px";
      v.style.background="#3247E5";
      v.style.color="white";
      v.style.fontSize="13px";
       v.style.borderRadius= "16px";
    }
  return (
    <div className={className}>
      <div className="upper_part">
        <h1 id="uph">TIMELINE </h1>
      </div>
      <div className="Main_circle">
        <div className="mc_1">
          <div className="slide">
            {obj_list.map((e, i) => {
              var a = `_0${i}0`;
              return (
                <div
                  key={i}
                  id={a}
                  onClick={(e) => {
                    console.log(e.target);
                    // alert(e);
                    return caller(e);
                  }}
                  className="buttons_"
                >
                  {e}{" "}
                </div>
              );
            })}
          </div>
          <div className="mc_2">
            <div className="mc_3">
              <div id="rfc0">
                <h2 id="sh1">Finance</h2>
                <p id="sp1">$23,657</p>
              </div>
              <div id="rfc1">
                <h2 id="sh1">Development</h2>
                <p id="sp1">$23,657</p>
              </div>
              <div id="rfc2">
                <h2 id="sh1">Design</h2>
                <p id="sp1">$23,657</p>
              </div>
              <div id="rfc3"></div>
              <div id="rfc4">
                <h2 id="sh1">Business</h2>
                <p id="sp1">$23,657</p>
              </div>
              <div id="pfc0"></div>
              <div id="pfc1"></div>
              <div id="pfc2"></div>
              <div id="pfc3">
                <h1 id="pp1">Investment</h1>
                <h2 id="pp2">$76,644</h2>
                <h2 id="pp3">3 months</h2>
              </div>
              <div id="pfc4"></div>
              <div id="pfc5"></div>
              <div id="pfc6"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="copy">
        <div id="cc1">
          <div id="purplecc1"></div>
          <div id="purplecc2"></div>
          <div id="purplecc3"></div>
          <div id="purplecc4"></div>
          <div id="purplecc5"></div>
          <div id="purplecc6"></div>
          <div id="purplecc7"></div>
          <div id="purplecc8"></div>
          <div className="view_dynamic">
            <div className="icons">
              <div id="isame">
                <div id="ic1">
                  <CropSquareTwoToneIcon
                    sx={{
                      color: "#023AFF",
                      transform: "rotate(40deg)",
                    }}
                  />
                </div>
                <p id="data">Trends Good</p>
                <p id="number_">204</p>
              </div>
              <div id="isame">
                <div id="ic1">
                  <RemoveRedEyeOutlinedIcon
                    sx={{
                      color: "#023AFF",
                    }}
                  />
                </div>
                <p id="data">Shopping Veiws</p>
                <p id="number_">65,540</p>
              </div>
              <div id="isame">
                <div id="ic1">
                  <LeaderboardOutlinedIcon
                    sx={{
                      color: "#023AFF",
                    }}
                  />
                </div>
                <p id="data">Store Dynamics</p>
                <p id="number_">324</p>
              </div>
            </div>
          </div>
        </div>
        <div id="right_clicks">
          <div className="clicks_icon">
            <div id="sub_add">
              <AddRoundedIcon />
              <RemoveRoundedIcon />
            </div>
            <div id="dot">
              <AdjustTwoToneIcon
                sx={{
                  color: "#5A5A89",
                }}
              />
            </div>
            <div id="threes">
              <AccountTreeTwoToneIcon
                sx={{
                  color: "#5A5A89",
                }}
              />
              <UsbTwoToneIcon
                sx={{
                  color: "#5A5A89",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default MiddRight;