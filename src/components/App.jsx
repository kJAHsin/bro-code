import { Routes, Route } from "react-router-dom";

// import Header and Footer
import Footer from "./Footer"
import Header from "./Header"
// import pages
import Home from "../pages/Home";
import About from '../pages/About';
import Events from '../pages/Events'
import Contact from '../pages/Contact'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App