import React from "react";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";

const HeaderUser = () => {
  return (
    <div className="flex flex-row justify-around p-3 bg-slate-500">
      <Link to="/category" className="font-bold text-lg text-white hover:text-black">J&N</Link>

      <div className="flex mx-2 items-center gap-2 border-black rounded-xl bg-neutral-100">
        <CiSearch className="ml-2 text-black"/>
        <input className="bg-neutral-100 rounded-xl outline-none" type="text" placeholder="Search" />
      </div>

      <div className="flex gap-5 hover:cursor-pointer">
        <p className="hover:text-black font-semibold text-white">Register</p>
        <p className="hover:text-black font-semibold text-white">Login</p>
      </div>
    </div>
  );
};

export default HeaderUser;
