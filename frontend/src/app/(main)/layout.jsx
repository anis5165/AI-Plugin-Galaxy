
import Navbar from "../navbar";

export default function MainLayout({ children }) {
  return (
    <>
    <div className="selection:bg-cyan-500 selection:text-cyan-900">

      <Navbar />
      {children}
    </div>
    </>
  );
}
