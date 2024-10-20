import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import Layout from "./component/Layout";
import Home from "./page/Home";
import Blog from "./page/Blog";
import Contact from "./page/Contact";
import About from "./page/About";
import Sell from "./page/Sell";
import Property from "./page/Property";
import NotFound from "./page/NotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="articles" element={<Blog />} />
            <Route path="contact" element={<Contact />} />
            <Route path="about-us" element={<About />} />
            <Route path="sell" element={<Sell />} />
            <Route path="property" element={<Property />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
