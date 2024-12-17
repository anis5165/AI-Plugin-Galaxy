'use client';
// import { AppProvider } from "@/context/appContext";
import Sidebar from "./sidebar";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* <AppProvider> */}
        <Sidebar/>
        {children}
        {/* </AppProvider> */}
      </body>
    </html>
  );
}
