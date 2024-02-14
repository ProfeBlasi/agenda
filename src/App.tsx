import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./Pages/Home/Home";
import Courses from "./Pages/Courses/Courses";

const App = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/course/:id" Component={Courses} />
      </Routes>
    </Router>
  );
}

export default App;