import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ThankYou from "./pages/ThankYou";
import NotFound from "./pages/NotFound";

import "./App.css";

export default function App() {
  return (
    <>
      <Router>
        <main>
          <Header />
          <Routes>
            <Route exact path="/" component={Home} />
            <Route path="/thank-you" component={ThankYou} />
            <Route path="*" component={NotFound} />
          </Routes>
          <Footer />
        </main>
      </Router>
    </>
  );
}
