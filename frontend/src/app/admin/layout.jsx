'use client';
// import AdminAuth from "../../auth/adminAuth";
// import { AppProvider } from "@/context/appContext";
import Sidebar from "./sidebar";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="selection:bg-cyan-500 selection:text-cyan-900">
        {/* <AppProvider> */}
        {/* <AdminAuth> */}
        
        {children} 
        <Sidebar/>
        {/* </AdminAuth> */}
        {/* </AppProvider> */}
      </body>
    </html>
  );
}
