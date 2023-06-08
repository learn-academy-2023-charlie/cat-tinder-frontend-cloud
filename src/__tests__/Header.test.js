import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import userEvent from "@testing-library/user-event"
import Header from "../components/Header"

describe("<Header />", () => {
    it("renders without crashing", () => {
        const div = document.createElement("div")
        render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>,
        div
        )
    })
    it("renders a logo with a src and alt", () => {
        const div = document.createElement("div")
        render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>,
        div
        )
        const logo = screen.getByRole("img")
        expect(logo).toHaveAttribute("src", "https://p1.hiclipart.com/preview/463/970/421/dr-doom-png-clipart.jpg")
        expect(logo).toHaveAttribute("alt", "Dr. Doom, a Marvel villain, slouches sultrily")  
    })
})