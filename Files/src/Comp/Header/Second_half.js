import React from 'react'
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
function Secondhalf({className}) {
    var obj_list=["Statistics","Overview","Dashboard","Analytics"]
  return (
    <div className={className}>
      <div className="Links_">
        {obj_list.map((e, i) => {
          return (
            <div onClick={(e)=>{
              // console.log(e.target);
              var v = e.target;
              // console.log(v);
              var parent=v.parentElement.parentElement.childNodes;
              // console.log(parent);
              if(parent.length===2){
                console.log("two lenght");
                 parent=(parent[0].childNodes);
                 console.log(parent);
                 parent.forEach(e=>{
                  // console.log(e);
                  e.style.border="none";
                 })
              }
              else{
                console.log('four length');
                console.log(parent);
                parent.forEach((e)=>{
                  console.log(e);
                  e.style.border="none";
                })
                v=v.parentElement;
              }
              
              v.style.borderBottom = "2px solid #5756B3 ";
              v.style.height="100%"; 
              v.style.transition="all .2s";

            }} id={`_00${i}`} key={i}>
              <h2   id="sech2" key={i}>
                {" "}
                {e}
              </h2>
            </div>
          );
        })}
      </div>
      <div className="last_icons">
        <PermIdentityOutlinedIcon
          sx={{
            color: "#A1A3D4",
          }}
        />
        <TuneOutlinedIcon
          sx={{
            color: "#A1A3D4",
            border: "1px solid #A1A3D4",
          }}
        />
      </div>
    </div>
  );
}

export default Secondhalf