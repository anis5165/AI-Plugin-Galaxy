'use client';
import "./globals.css";
import { AppProvider } from "@/context/appContext";
import { Toaster } from "react-hot-toast";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-neutral-950 text-neutral-300 antialiased selection:bg-cyan-500 selection:text-cyan-900">
        <AppProvider>
          <div className="relative">
            <div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] bg-neutral-950"></div>
              <Toaster position="top-center" />
            <main>{children}</main>
          </div>
        </AppProvider>
      </body>
    </html>
  );
}
