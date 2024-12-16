'use client';
// import { AppProvider } from "@/context/appContext";
import { Toaster } from "react-hot-toast";
import Sidebar from "./sidebar";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* <AppProvider> */}
        <Sidebar/>
        <Toaster position="top-center"/>
        {children}
        {/* </AppProvider> */}
      </body>
    </html>
  );
}
