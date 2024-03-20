import React, { useState } from "react";
import Home from "./components/Home";
import { Link, Route, Routes } from "react-router-dom";
import User from "./components/User";
import About from "./components/About";
import UserDetails from "./components/UserDetails";

const App = () => {
  const [user, setUser] = useState([]);

  return (
    <div className="p-1 w-1/2 m-auto">
      <nav className="mt-4 flex justify-center gap-10">
        <Link to={"/"}>Home</Link>
        <Link to={"/User"}>User</Link>
        <Link to={"/About"}>About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/User" element={<User />} />
        <Route path="/User/:id" element={<UserDetails />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </div>
  );

};

export default App;
