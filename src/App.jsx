import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import NavbarTailwind from "./components/navbar/NavbarTailwind";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <NavbarTailwind />

      <Routes>
        <Route path="/" element={<Homepage />}></Route>

        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </>
  );
}

export default App;
