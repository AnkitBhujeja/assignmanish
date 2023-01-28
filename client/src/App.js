
import './App.css';
import AddListing from './components/AddListing';
import Header from './components/Header';
import Home from './components/Home';
import HomeNav from './components/HomeNav';
import Login from './components/Login';
import Register from './components/Register';
import { BrowserRouter as Router,  Route ,Routes} from "react-router-dom";

function App() {
  return (
    <div >
      <Router>
        <Routes>
        
      {/* <HomeNav/> */}
      <Route exact path="/register"  element={<><Header/><Register /></>}>
      
      </Route>
      {/* <Register2/> */}
      <Route exact path="/home"  element={<><HomeNav/><AddListing/></>}>
      
      </Route>
      {/* <AddListing/> */}
      <Route exact path = "/login"  element={<><Header/><Login /></>}>
      
      </Route>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
