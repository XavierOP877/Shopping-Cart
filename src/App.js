import './App.css';
import Navbar from './components/navbar';
import Cart from './components/cart';
import Home from './components/home';
import Preview from './components/preview';
import Product from './components/product';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"


function App() {
  return (
    <>
    <Router>
      <Navbar></Navbar>
      <Switch>
        <Route path='/cart'>
          <Cart></Cart>
        </Route>
        <Route path='/preview:id'>
          <Preview></Preview>
        </Route>
        <Route path='/'>
          <Home></Home>
        </Route>
      </Switch>
    </Router>
    </>
  );
}

export default App;
