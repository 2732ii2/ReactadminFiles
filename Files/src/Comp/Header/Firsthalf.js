import React from 'react'
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
export default function Firsthalf({className}) {
  return (
    <div className={className}>
      <div className="circle_">
        <div className="cirle">
          <div id="ic"></div>
        </div>
        <div className="Comp_name">
          <h1 id="cnh1">ORION</h1>
        </div>
      </div>
      <div className="searchbar_">
        <input id="inp" />
        <SearchOutlinedIcon
          sx={{
            color: "rgba(0,0,0,.3)",
          }}
        />
      </div>
      {/* first completed */}
    </div>
  );
}

