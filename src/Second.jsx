import React from "react";
import img6 from "./img6.png"; // adjust the path as needed
import img7 from "./img7.png"; // adjust the path as needed
import img8 from "./img8.png"; // adjust the path as needed
import img9 from "./img9.png"; // adjust the path as needed
import img10 from "./img10.png"; // adjust the path as needed
import img11 from "./img11.png"; // adjust the path as needed
import img12 from "./img12.png"; // adjust the path as needed

const Second = () => {
  return (
    <>
      <h1 className="flex justify-center text-3xl font-bold underline">
        Second Layour
      </h1>

      <div className="container flex flex-row">
        <div class="grid grid-cols-1 gap-3 p-4">
          <div className="border-0 h-100 w-119 bg-amber-900 overflow-hidden rounded-lg ">
            <img src={img6} alt="Description of the image" className="h-100"/>
          </div>
          <div className="border-0 h-100 w-119 bg-amber-300 overflow-hidden rounded-lg ">
            <img src={img7} alt="Description of the image" className="h-100"/>
          </div>
        </div>


        <div class="grid grid-cols-1 gap-10 p-4">
          <div className="border-0 h-205 w-119 ml-55 bg-amber-400 overflow-hidden rounded-lg ">
            <img src={img9} alt="Description of the image" className="h-full" />
          </div>
        </div>


        <div class="grid grid-cols-1 gap-3 p-4">
          <div className="border-0 h-60 w-123  ml-79 bg-amber-500 overflow-hidden rounded-lg ">
            <img src={img8} alt="Description of the image"/>
          </div>


          <div className="flex flex-row  w-190 gap-4 ml-79">
            <div className="border-0 h-70 w-60  bg-amber-600 overflow-hidden rounded-lg ">
              <img src={img10} alt="Description of the image" className="h-70" />
            </div>
            <div className="border-0 h-70 w-60 bg-amber-800 overflow-hidden rounded-lg ">
              <img src={img11} alt="Description of the image" className="h-70"/>
            </div>
          </div>


          <div className="border-0  h-70 w-123  ml-79 bg-amber-900 overflow-hidden rounded-lg">
            <img src={img12} alt="Description of the image" className="h-70"/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Second;
