import "./App.css";
import Header from "./layout/Header/Header";
import Hero from "./layout/Hero/Hero";
import About from "./pages/About/About";
import GymStaff from "./layout/GymStaff/GymStaff";
import GymClassScheduleTable from "./layout/Class/GymClassScheduleTable";
import Gallery from "./layout/Gallery/Gallery";
import Testimonials from "./layout/Testimonials/Testimonials";
import Footer from "./layout/Footer/Footer";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    let timer = setTimeout(() => setLoaded(true), 2000);
    return () => {
      clearTimeout(timer);
    };
  }, []);
  return (
    <div className="bg-background  text-text">
      {!loaded ? (
        <div className="h-screen w-screen grid place-content-center">
          <span class="loader"></span>
        </div>
      ) : (
        <>
          <Header />
          <Hero />
          <About />
          <GymStaff />
          <GymClassScheduleTable />
          <Gallery />
          <Testimonials />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
