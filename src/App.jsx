import React from "react";
import HomePage from "./pages/Home";
import WorkPage from "./pages/Work";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import AdvanceEditing from "./pages/AdvanceEditing";
import BasicEditing from "./pages/BasicEditing";
import Thumbnail from "./pages/Thumbnail";

const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/work/editing/basic/:type" element={<BasicEditing />} />
        <Route path="/work/editing/advance/:type" element={<AdvanceEditing />} />
        <Route path="/work/thumbnail/:type" element={<Thumbnail />} />
      </Routes>
    </>
  );
};

export default App;
