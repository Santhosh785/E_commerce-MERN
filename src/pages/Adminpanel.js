import React from "react";
import { useSelector } from "react-redux";
import { FaCircleUser } from "react-icons/fa6";
import { Link  } from "react-router-dom";
import { Outlet } from "react-router-dom";

const Adminpanel = () => {
  const user = useSelector((state) => state?.user?.user);

  return (
    <div className="min-h-[calc(90vh-100px)] hidden md:flex">
      {/* Sidebar */}
      <aside className="bg-white min-h-full w-full max-w-60 shadow-md">
        <div className="h-32 flex justify-center items-center flex-col">
          <div className="text-5xl cursor-pointer relative flex items-center justify-center">
            {user?.profilepic ? (
              <img
                src={user.profilepic}
                alt={user.name}
                className="w-20 h-20 rounded-full object-cover"
              />
            ) : (
              <FaCircleUser />
            )}
          </div>
          <p className="capitalize text-lg font-semibold hav">{user?.name}</p>
          {/* <p className="text-sm text-gray-500">{user?.email}</p> */}
          <p>{user?.role}</p>
        </div>
            {/* Sidebar navigation */}
        <div>
            <nav className="flex flex-col">
                <Link to={"all-users"} className="px-4 py-2 hover:bg-gray-100 ">All Users</Link>
                <Link to={"all-products"} className="px-4 py-2 hover:bg-gray-100">Upload Product</Link>
            </nav>
        </div>
      </aside>

      {/* Main content */}
      <main className="w-full h-full p-2">
        <Outlet />
      </main>
    </div>
  );
};

export default Adminpanel;
