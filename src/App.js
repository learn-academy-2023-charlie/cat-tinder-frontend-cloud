import React, { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import VillainIndex from "./pages/VillainIndex";
import VillainNew from "./pages/VillainNew";
import VillainEdit from "./pages/VillainEdit";
import VillainShow from "./pages/VillainShow";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import mockVillains from "./mockVillains";

const App = () => {
  const [villains, setVillains] = useState(mockVillains);

  const createVillain = (newVillain) => {
    console.log("my new villain!", newVillain);
  };

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/villainindex" element={<VillainIndex villains={villains} />} />
        <Route path="/villainshow/:id" element={<VillainShow villains={villains} />} />
        <Route
          path="/villainnew"
          element={<VillainNew createVillain={createVillain} />}
        />
        <Route path="/villainedit" element={<VillainEdit />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
