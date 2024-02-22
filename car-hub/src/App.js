import './App.css';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Home from './pages/home';
import Discuss from './pages/discuss';
import Events from './pages/events';
import Navbar from './components/navbar';


function App() {
  return (
    <div className="App">

      <Navbar/>

      <BrowserRouter>
        {/* Navigation Links */}
        {/* <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/discuss">Discuss</NavLink>
            </li>
            <li>
              <NavLink to="/events">Events</NavLink>
            </li>
          </ul>
        </nav> */}

        {/* Define routes */}
          {/* Use Route components to define your routes */}
          <Routes>
            <Route path="/"  component={Home} />
            <Route path="/discuss" component={Discuss} />
            <Route path="/events" component={Events} />
            {/* Add more routes here if needed */}
            {/* If none of the routes match, show a 404 page */}
            {/* <Route render={() => <h1>404: Not Found</h1>} /> */}
          </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
