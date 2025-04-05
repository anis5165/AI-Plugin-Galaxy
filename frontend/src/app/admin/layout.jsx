'use client';
// import AdminAuth from "../../auth/adminAuth";
// import { AppProvider } from "@/context/appContext";
import Sidebar from "./sidebar";


export default function AdminLayout({ children }) {
  return (
    <>
      <div className="selection:bg-cyan-500 selection:text-cyan-900">

        {/* <AppProvider> */}
        {/* <AdminAuth> */}

        <Sidebar />
        {children}
        {/* </AdminAuth> */}
        {/* </AppProvider> */}
      </div>
    </>
  );
}
