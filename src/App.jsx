import "./App.css";
import Header from "./layout/Header/Header";
import Hero from "./layout/Hero/Hero";
import About from "./pages/About/About";
import GymStaff from "./layout/GymStaff/GymStaff";
import GymClassScheduleTable from "./layout/Class/GymClassScheduleTable";
import Gallery from "./layout/Gallery/Gallery";
import Testimonials from "./layout/Testimonials/Testimonials";
import Footer from "./layout/Footer/Footer";

function App() {
  return (
    <div className="bg-background  text-text ">
      <Header />
      <Hero />
      <About />
      <GymStaff />
      <GymClassScheduleTable />
      <Gallery />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
