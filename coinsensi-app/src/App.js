import SearchAppBar from './Components/Navbar/index.js';
import Home from './Components/Home/index.js';
import About from './Components/About/index.js';
import Contact from './Components/Contact/index.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './Components/Footer/index.js';
import Buy from './Components/Buy/index.js';
import Reviews from './Components/Reviews/index.js';
import Trading from './Components/Trading/index.js';

import './App.css';

function App() {
  return (
    <div className="App">

      <SearchAppBar />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path='/buy' component={Buy} />
          <Route path='/reviews' component={Reviews} />
          <Route path='/trading' component={Trading} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
