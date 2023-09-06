import './App.css';
import {} from 'bootstrap';
import Fetch from './components/Fetch';
import { BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Page from './components/Page';
import Home from './components/Home';


function App() {
  
  return (
    
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/Fetch">Fetch</Link>
              </li>
              <li>
                <Link to="/Page">Page</Link>
              </li>
            </ul>
          </nav>

          <Routes>
          <Route path="/" exact component={Home} />  
          <Route path="/Fetch" element={<Fetch/>} />
          <Route path="/Page" element={<Page/>} />
          </Routes>
        </div>
      </Router>
     
  );


}



export default App;




// rfce component kısayol

