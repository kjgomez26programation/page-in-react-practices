import React from "react";
import Navbar from "./Components/Navbar";
import './app.css'
import Banner from "./Components/Banner"
import About from "./Components/About";
import Float from "./Components/Float"
import Bafloat from "./Components/Bafloat";
import Services from "./Components/Services";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner />
      <About/>
      <Float/>
      <Bafloat/>
      <Services/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
