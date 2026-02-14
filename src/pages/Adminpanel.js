import React from "react";
import { useSelector } from "react-redux";
import { FaCircleUser } from "react-icons/fa6";

const Adminpanel = () => {
  const user = useSelector((state) => state?.user?.user);

  return (
    <div className="min-h-[calc(90vh-90px)] flex">
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
          <p className="capitalize text-lg font-semibold">{user?.name}</p>
          <p className="text-sm text-gray-500">{user?.email}</p>
          <p>{user?.role}</p>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-4">
        main
      </main>
    </div>
  );
};

export default Adminpanel;
