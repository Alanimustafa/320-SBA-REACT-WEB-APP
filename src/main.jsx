import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css'
import App from './App.jsx'
import Details from './pages/Details.jsx';
import Mens from './pages/mens.jsx';
import Jewelery from './pages/Jewelery.jsx';
import Electronics from './pages/electronics.jsx';
import Womens from './pages/womens.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        {/* The main (root) page route is using the App component */}
        <Route path="/" element={<App />}></Route>
        {/* The Details Route uses the id param and useParams in the Details component to dispaly the details of each item */}
        <Route path="/details/:id" element={<Details/>}></Route>
        {/* The men's clothing Route */}
        <Route path="/mens" element={<Mens/>}></Route>
        {/* The Women's clothingRoute */}
        <Route path="/womens" element={<Womens/>}></Route>
        {/* The Jewelery Route */}
        <Route path="/jewelery" element={<Jewelery/>}></Route>
        {/* The Electronics Route */}
        <Route path="/electronics" element={<Electronics/>}></Route>
      </Routes>
    </Router>
  </StrictMode>,
)
