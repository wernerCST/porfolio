import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home'
import Content from './components/pages/Content';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/content' exact component={Content}/>
          <Route path='/about' exact component={About}/>
          <Route path='/contact' exact component={Contact}/>          
        </Switch>
        <Footer/>
      </Router>     
    </>       
  );
}

export default App;
