import React from "react";
import Layout from "./pages/Layout";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";
import FavList from "./components/FavList";
import Home from "./components/Home";
import PokeList from "./components/PokeList";
import PokeSingle from "./components/PokeSingle";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="pokelist" element={<PokeList />}>
              <Route path="pokesingle" element={<PokeSingle />} />
            </Route>
            <Route path="/favlist" element={<FavList />} />
            <Route path="/about" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
