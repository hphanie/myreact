import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Home from './components/pages/home/Home';
import About from './components/pages/about/About';
import NotFound from './components/pages/notfound/NotFound';
import Event from './components/pages/events/Event';
import Login from './components/pages/login/Login';
import Register from './components/pages/register/Register';
import Articles from './components/pages/article/Articles';
import Dashboard from './components/pages/dashboard/Dashboard';
// import PrivateRoute from './components/pages/privateRoute/PrivateRoute';

function App() {
  return (
    <BrowserRouter>
      <div className="text-center font-semibold text-xl bg-yellow-200 text-black mx-auto px-5 py-5 space-x-6">
        <NavLink className=" hover:text-yellow-500" to="/">Home</NavLink>
        <NavLink className=" hover:text-yellow-500" to="/about">About</NavLink>
        <NavLink className=" hover:text-yellow-500" to="/article">Article</NavLink>
        <NavLink className=" hover:text-yellow-500" to="/events">Event</NavLink>
        <NavLink className=" hover:text-yellow-500" to="/login">Login</NavLink>
        <NavLink className=" hover:text-yellow-500" to="/register">Register</NavLink>
        <NavLink className=" hover:text-yellow-500" to="/dashboard">Dashboard</NavLink>
      </div>

      <Routes>
        <Route path="/events" element={<Event />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/article" element={<Articles />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* <Route path="/dashboard" element={<PrivateRoute><Dashboard/></PrivateRoute>}/> */}
      </Routes>
      <div className="text-center text-xl bg-yellow-200 text-black mx-auto px-3 py-3">
        <footer>
          <p>copyright {new Date().getFullYear()}-tous droits réservés</p>
        </footer>
      </div>



    </BrowserRouter>
  );
}

export default App;
