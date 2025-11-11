import { useEffect } from "react";
import Navbar from "./components/Navbar";

export default function App() {
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "light");
  }, []);

  return (
    <div className="min-h-screen bg-base-100">
      <Navbar />
    </div>
  );
}
