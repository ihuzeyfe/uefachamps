import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import "./App.css";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Clubs } from "./components/Clubs";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/contact" exact element={<Contact />} />
        <Route path="/clubs" exact element={<Clubs />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
