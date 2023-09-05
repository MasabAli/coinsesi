import SearchAppBar from './Components/Navbar/index.js';
import Home from './Components/Home/index.js';
import About from './Components/About/index.js';
import Contact from './Components/Contact/index.js';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import Footer from './Components/Footer/index.js';
import Buy from './Components/Buy/index.js';
import Reviews from './Components/Reviews/index.js';
import Trading from './Components/Trading/index.js';


import './App.css';

function App() {
  return (
    <div className="App">
      
      <Router>
      <SearchAppBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/buy" element={<Buy />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/trading" element={<Trading />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
