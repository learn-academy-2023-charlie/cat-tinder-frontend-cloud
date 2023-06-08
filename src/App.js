import React, { useState } from "react"
import Footer from "./components/Footer"
import Header from "./components/Header"
import VillainEdit from "./pages/VillainEdit"
import VillainIndex from "./pages/VillainIndex"
import VillainNew from "./pages/VillainNew"
import VillainShow from "./pages/VillainShow"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import './App.css';
import { Routes, Route } from "react-router-dom"

import mockVillains from "./mockVillains"

const App = () => {
  const [villains, setVillains] = useState(mockVillains)

  console.log(villains)
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/villainindex" element={<VillainIndex />} />
        <Route path="/villainshow" element={<VillainShow />} />
        <Route path="/villainnew" element={<VillainNew />} />
        <Route path="/villainedit" element={<VillainEdit />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App;
