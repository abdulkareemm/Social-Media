import React from "react";
import Logo from "../img/logo.png";
import { Link } from "react-router-dom";

const Auth = () => {
  return (
    <div className="flex items-center justify-center h-[100vh] gap-[4rem] relative">
      <div className="flex items-center justify-center gap-3">
        <img src={Logo} alt="" className="w-24 h-24" />
        <div>
          <h1 className="text-[3rem] font-bold mb-11 text-[rgb(249,130,39)]">
            AKS Media
          </h1>
          <h6 className="text-[0.85rem] font-semibold">
            Explore the ideas throughout the world
          </h6>
        </div>
      </div>
      <div className="flex flex-col items-center bg-cardColor p-4 rounded-md gap-9">
        <h3 className="text-xl font-bold ">Sign up</h3>
        <form action="" className="flex flex-col gap-2">
          <div className="w-full flex gap-3">
            <input
              type="text"
              className="bg-inputColor h-[3rem] rounded-md p-3"
              placeholder="First Name"
            />
            <input
              type="text"
              className="bg-inputColor h-[3rem] rounded-md p-3"
              placeholder="Last Name"
            />
          </div>
          <input
            type="text"
            className="bg-inputColor h-[3rem] rounded-md w-full p-3"
            placeholder="Username"
          />
          <div className="w-full flex gap-3">
            <input
              type="password"
              className="bg-inputColor h-[3rem] rounded-md p-3"
              placeholder="Password"
            />
            <input
              type="password"
              className="bg-inputColor h-[3rem] rounded-md p-3 w-full"
              placeholder="Confirm Password"
            />
          </div>
        </form>
        <div className="flex flex-row gap-4 items-center">
          <Link to={"/log-in"} className="text-blue-400 text-[15px] hover:text-blue-900 hover:underline">Already have an account Login</Link>
          <button className="flex items-center justify-center h-[2rem] pl-[20px] pr-[20px] text-white hover:text-black hover:font-bold border-none rounded-[0.5rem] transition-all ease-out duration-100 bg-[linear-gradient(106.23deg,_#f99827,_#f95f35_100%)]">
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Auth;
