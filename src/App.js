
import './App.css';
import Home from './Screens/Home';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Login from './Screens/Login';
import Signup from './Screens/Signup';
import Alumini from './Screens/Alumini';
import Details from './Screens/Details';
import Jobs from './Components/Jobs';
import UploadJob from './Components/UploadJob';

function App() {
  return (
    <Router>
    <div>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/signup" element={<Signup/>} />
        <Route exact path="/alumini" element={<Alumini/>} />
        <Route exact path="/details" element={<Details/>} />
        <Route exact path="/jobs" element={<Jobs/>} />
        <Route exact path="/uploadjobs" element={<UploadJob/>} />
      </Routes> 
    </div>
 </Router>

  );
}

export default App;

