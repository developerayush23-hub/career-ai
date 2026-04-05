import Navbar from "./components/Navbar";
import Hero from "./components/hero";
import CareerForm from "./components/CareerForm";
import Courses from "./components/Courses";
import Chatbot from "./components/Chatbot";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-gray-950 text-white">
      <Navbar />
      <Hero />
      <CareerForm />
      <Courses />
      <Chatbot />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;