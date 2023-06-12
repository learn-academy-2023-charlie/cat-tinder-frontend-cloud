import React, { useState, useEffect } from "react";
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

const App = () => {
  const [villains, setVillains] = useState([]);

  useEffect(() => {
    readVillain();
  }, []);

  const readVillain = () => {
    fetch("http://localhost:3000/villains")
      .then((response) => response.json())
      .then((payload) => {
        setVillains(payload);
      })
      .catch((error) => console.log(error));
  };

  const createVillain = (createdVillain) => {
    fetch("http://localhost:3000/villains", {
      body: JSON.stringify(createdVillain),
      headers: {
        "Content-Type": "application/json",
      },

      method: "POST",
    })
      .then((response) => response.json())
      .then((payload) => readVillain())
      .catch((errors) => console.log("Villain create errors:", errors));
  };

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/villainindex"
          element={<VillainIndex villains={villains} />}
        />
        <Route
          path="/villainshow/:id"
          element={<VillainShow villains={villains} />}
        />
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
