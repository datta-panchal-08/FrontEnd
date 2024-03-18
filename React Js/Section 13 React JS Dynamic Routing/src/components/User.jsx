import React from "react";
import { Link } from "react-router-dom";
import {Outlet} from 'react-router-dom'

const User = () => {
  return (
    <>
    <div className=" m-auto mt-10 w-1/2 p-4">
      <h1 className="text-5xl mb-4 text-center font-bold">Users</h1>
      <div className="flex flex-col justify-center items-center mt-5">
        <Link
          to="/user/John"
          className="bg-red-300 px-3 py-1 mb-3 text-2xl font-semibold hover:bg-red-500 hover:text-white"
        >
          John
        </Link>
        <Link
          to="/user/Datta"
          className="bg-red-300 px-3 py-1 mb-3 text-2xl font-semibold hover:bg-red-500 hover:text-white"
        >
          Datta
        </Link>
        <Link
          to="/user/Param"
          className="bg-red-300 px-3 py-1 mb-3 text-2xl font-semibold hover:bg-red-500 hover:text-white"
        >
          Param
        </Link>
      </div>
    </div>
    <hr />
    <Outlet />
    </>
  );
};

export default User;
