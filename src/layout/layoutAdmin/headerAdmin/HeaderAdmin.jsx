import React from "react";
import { Link } from "react-router-dom";
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function HeaderAdmin() {
  return (
    <div className="flex mt-2 items-center">
      <div>
        <Link to="/admin" className="ml-5 text-5xl">
          Admin
        </Link>
      </div>

      <div>
        <div className="flex ml-[100px] text-4xl">
          <Link className="ml-9">Products</Link>
          <Link className="ml-9">Categories</Link>
          <Link className="ml-9">Users</Link>
          {/* <AccountCircleIcon /> */}
        </div>
      </div>
    </div>
  );
}

export default HeaderAdmin;