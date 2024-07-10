import React, { useState } from "react";


const TrafficL=({offLi})=>{
  const [color, setColor]= useState(offLi);

  const handleClickRed=()=>{
    setColor("red");
  }
  const handleClickYellow=()=>{
    setColor("yellow");
  }
  const handleClickGreen=()=>{
    setColor("green");
  }
 

    return(
  <div className="flex flex-row justify-center">
    <div className="container flex h-80 w-28 flex-col items-center justify-center gap-2 rounded-lg bg-slate-400 mt-11 border-4 border-black">
      <div onClick={handleClickRed} className={"h-24 w-24 border-4 border-black rounded-full " + (color === "red" ? "bg-red-500" : "bg-red-900")}>

        </div>
      <div onClick={handleClickYellow} className={"h-24 w-24 border-4 border-black rounded-full " + (color==="yellow" ? "bg-yellow-500" : "bg-yellow-900")}></div>
      <div onClick={handleClickGreen} className={"h-24 w-24 border-4 border-black rounded-full " + (color==="green" ? "bg-green-500" : "bg-green-900")}></div>
    </div>
  </div>



   
    );
};

export default TrafficL;