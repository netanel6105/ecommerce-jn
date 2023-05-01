import React from "react";
import { Link } from "react-router-dom";

// import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function HeaderAdmin() {
  return (
    <div className="flex mt-2 items-center">
    <div>
      <Link to="/admin" className="ml-[200px] text-5xl">
        Admin
      </Link>
    </div>

    <div>
      <div className="flex ml-[100px] text-4xl">
        <Link className="ml-9">Products</Link>
        <Link className="ml-9">Categories</Link>
        <Link to="/admin/users" className="ml-9">
          Users
        </Link>
        {/* <AccountCircleIcon /> */}
      </div>
    </div>

    <Link className="ml-[150px] text-4xl" to="/admin/login">
      Login
    </Link>
  </div>
  );
}

export default HeaderAdmin;