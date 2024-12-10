import React, { useState } from 'react';
import { TbLayoutSidebarLeftExpandFilled, TbLayoutSidebarLeftCollapseFilled } from "react-icons/tb";
import Customersideber from '../components/customersideber';
import { Outlet } from 'react-router-dom';

function CustomerDashboard() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <div className="bg-stone-900 min-h-screen">
      {/* Button to toggle the sidebar (visible only on small devices) */}
      <button
        onClick={toggleSidebar}
        className="p-2 m-4 text-white bg-gray-600 rounded-lg md:hidden"
      >
        {isSidebarVisible ? (
          <TbLayoutSidebarLeftExpandFilled size={24} className="text-white" />
        ) : (
          <TbLayoutSidebarLeftCollapseFilled size={24} />
        )}
      </button>

      <div className="flex">
        {/* Sidebar (always visible on large devices) */}
        <div
          className={`w-4/5 absolute md:static md:w-1/3 ${isSidebarVisible ? "block" : "hidden"} md:block`}
        >
          <Customersideber />
        </div>

       <div>
        <Outlet></Outlet>
       </div>
      </div>
    </div>
  );
}

export default CustomerDashboard;