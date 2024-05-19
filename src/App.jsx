import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import HomePage from './Components/HomePage';
import ToolsPage from './Components/ToolsPage'; 
import ToolQuestions from './Components/ToolQuestions';
import Signup from './Components/Signup';
import Login from './Components/Login';
import ToolResult from './Components/ToolResult';
import Dashboard from './Components/Dashboard';
import Home from './Components/Home';
import Result from './Components/Result';
import Services from './Components/Services';
import TestML from './Components/TestML';
import Toj from './Components/Toj';
import ResultML from './Components/ResultML';
import Profile from './Components/Profile';
import About from './Components/About';
import Contact from './Components/Contact';
import Register from './Components/Register';
import Error from './Components/Error';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Error />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/ml" element={<TestML />} />
          <Route path="/tools/:toolId/questions" element={<ToolQuestions />} />
          <Route path="/tools/:toolId/result" element={<ToolResult />} />
          <Route path="/tools" element={<Dashboard />} />
          <Route path="/tools/result" element={<Result />} />
          <Route path="/result" element={<TestML />} />
          <Route path="/toj" element={<Toj />} />
          <Route path="/resultt" element={<ResultML />} />
          <Route path="/services" element={<Services/>}/>
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
