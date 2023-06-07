import React from "react";
import { CiSearch } from "react-icons/ci";

const HeaderUser = () => {
  return (
    <div className="flex flex-row justify-around">
      <div>J&N</div>

      <div>
        <CiSearch />
      </div>

      <div className="flex gap-5">
        <p>Register</p>
        <p>Login</p>
      </div>
    </div>
  );
};

export default HeaderUser;
