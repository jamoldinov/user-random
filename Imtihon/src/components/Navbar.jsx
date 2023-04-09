import React from "react";
import { BsCloudMoon, BiUserPin } from "react-icons/all";
import './navbar.css'

function Navbar() {
  return (
   <div className="">
     <div className="max-w-5xl mx-auto flex justify-between items-center my-5">
      <div className="flex gap-2 items-center cursor-pointer hover:opacity-30">
        <button className="flex">
        <BiUserPin className="text-5xl text-yellow-700 " />
        <h1 className="text-yellow-700 text-4xl font-bold">USER</h1>
        </button>
      </div>
      <span className="">
        <BsCloudMoon className="text-4xl text-yellow-700 hover:opacity-30" />
      </span>
    </div>
    <div class="hero">
          <h1 className="text-3xl text-white font-bold">RANDOM USER GENERATOR</h1>
        </div>
   </div>
  );
}

export default Navbar;
