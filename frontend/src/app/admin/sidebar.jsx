'use client';
import React, { useState } from "react";
import Link from "next/link";
import useAppContext from "@/context/appContext";

const Sidebar = () => {
  const [active, setActive] = useState(false);
  const { loggedIn, logout } = useAppContext();
  const handleToggle = () => setActive(!active);

  return (
    <div className="relative">
      {/* Hamburger Button */}
      <button
        className="p-3 rounded lg:hidden ml-auto outline-none"
        onClick={handleToggle}
      >
        <span className="text-white text-3xl">☰</span> {/* Hamburger icon */}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed inset-0 z-50 w-56 bg-[#0A0A0A] text-white transform transition-transform duration-300 ease-in-out ${active ? "translate-x-0" : "-translate-x-80"
          } lg:translate-x-0`}
      >
        {/* Sidebar Header */}
        <div className="border-b border-white/20 p-6  flex justify-between items-center">
          <h6 className="text-xl font-semibold">Admin Dashboard</h6>
          {/* Close Button */}
          <button className="lg:hidden" onClick={handleToggle}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              className="w-6 h-6 text-white"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Sidebar Menu */}
        <nav className="p-4 space-y-2">
          <ul className="space-y-2">
            <li>
              <Link href="/admin/dashboard">
                <button className="flex items-center gap-4 w-full py-3 px-4 rounded-lg hover:bg-white/10 transition">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 101.061 1.06l8.69-8.69z" />
                    <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                  </svg>
                  Dashboard
                </button>
              </Link>
            </li>
            <li>
              <Link href="/admin/manageUser">
                <button className="flex items-center gap-4 w-full py-3 px-4 rounded-lg hover:bg-white/10 transition">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Manage Users
                </button>
              </Link>
            </li>
            <li>
              <Link href="/admin/feedback">
                <button className="flex items-center gap-4 w-full py-3 px-4 rounded-lg hover:bg-white/10 transition">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.804 21.644A6.707 6.707 0 006 21.75a6.721 6.721 0 003.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 01-.814 1.686.75.75 0 00.44 1.223zM8.25 10.875a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25zM10.875 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875-1.125a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Feedbacks
                </button>
              </Link>
            </li>
            <li>
              <Link href="/admin/extensionForm">
                <button className="flex items-center gap-4 w-full py-3 px-4 rounded-lg hover:bg-white/10 transition">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.5 5.625c0-1.036.84-1.875 1.875-1.875h17.25c1.035 0 1.875.84 1.875 1.875v12.75c0 1.035-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 18.375V5.625zM21 9.375A.375.375 0 0020.625 9h-7.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h7.5a.375.375 0 00.375-.375v-1.5zm0 3.75a.375.375 0 00-.375-.375h-7.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h7.5a.375.375 0 00.375-.375v-1.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Add Extension
                </button>
              </Link>
            </li>
          </ul>

          {/* Logout */}
          <ul className="mt-6">
            <li>
              <>
                <button onClick={logout} className="flex items-center gap-4 w-full py-3 px-4 rounded-lg hover:bg-white/10 transition">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path d="M7.5 3.75A1.5 1.5 0 006 5.25v13.5a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5V15a.75.75 0 011.5 0v3.75a3 3 0 01-3 3h-6a3 3 0 01-3-3V5.25a3 3 0 013-3h6a3 3 0 013 3V9A.75.75 0 0115 9V5.25a1.5 1.5 0 00-1.5-1.5h-6z" />
                  </svg>
                  Logout
                </button>
              </>
            </li>
          </ul>
        </nav>
      </aside>
    </div>
  );
};

export default Sidebar;
