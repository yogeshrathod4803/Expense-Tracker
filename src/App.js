import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import HomePage from "./components/appComponents/HomePage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/homepage" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
