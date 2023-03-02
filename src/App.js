// App.js

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Features from "./pages/Features";
import Team from "./pages/Team";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/services" component={Services} />
          <Route path="/projects" component={Projects} />
          <Route path="/features" component={Features} />
          <Route path="/team" component={Team} />
          <Route path="/testimonials" component={Testimonials} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
