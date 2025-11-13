import { useEffect } from "react";
import Navbar from "./components/Navbar";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

export default function App() {
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "light");
  }, []);

  return (
    <>
      <div
        className="w-full h-screen bg-cover bg-center"
        style={{
          backgroundImage: `url("https://i0.wp.com/5d-konsulterna.se/wp-content/uploads/2020/06/DSC_0468-scaled.jpg?fit=1707%2C2560&ssl=1")`,
        }}
      >
        <div className="flex flex-col min-h-screen h-screen gap-5 pt-5">
          {/* Navbar stays fixed at the top */}
          <Navbar />

          {/* Main content area centers its children */}
          <main className="flex h-full justify-center">
            <Routes>
              <Route path="/" element={<Navigate to="/home" replace />} />
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </main>
        </div>
      </div>
    </>
  );
}
