import { render, screen } from "@testing-library/react";
import VillainIndex from "../pages/VillainIndex";
import mockVillains from "../mockVillains";
import { BrowserRouter } from "react-router-dom";

describe("<VillainIndex />", () => {
  it("renders without crashing", () => {});
  render(
    <BrowserRouter>
      <VillainIndex villains={mockVillains} />
    </BrowserRouter>,
    // div
  );
  it("renders villain cards", () => {
    const div = document.createElement("div");
    render(
      <BrowserRouter>
        <VillainIndex villains={mockVillains} />
      </BrowserRouter>,
      div
    );
    mockVillains.forEach(villain => {
        screen.getByAltText(`profile of the villain ${villain.name}`
        )
    })
    screen.logTestingPlaygroundURL();
  });
});


