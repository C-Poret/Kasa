import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Logement from "./pages/Logement";
import Error from "./pages/Error";
import About from "./pages/About";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
    return (
        <div className="App">
            <Header />
                <Router>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/logement" element={<Logement />} />
                        <Route path="*" element={<Error />} />
                        <Route path="/about" element={<About />} />
                    </Routes>
                </Router>
            <Footer />
        </div>
    );
};

export default App;