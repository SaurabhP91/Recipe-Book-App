import './App.css';
import Header from './components/header/Header';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect,
} from "react-router-dom";
import Homepage from './pages/homepage/Homepage';
import Detailspage from './pages/detailspage/Detailspage';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Homepage/>}/>

        <Route exact path='/details' element={<Detailspage/>}/>

        <Route exact path='/details/:recipe_id' element={<Detailspage/>}/>



      </Routes>
    </Router>
  );
}

export default App;
