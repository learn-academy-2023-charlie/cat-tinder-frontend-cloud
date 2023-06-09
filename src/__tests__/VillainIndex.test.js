import { render, screen } from "@testing-library/react"
import VillainIndex from "../pages/VillainIndex"
import mockVillains from "../mockVillains";

describe("<VillainIndex />", () => {
    it("renders without crashing", () => {})
    it("renders villain cards", () => {
        const div = document.createElement("div")
        render(<VillainIndex mockVillains={mockVillains} />, div)
        mockVillains.forEach(villain => {
            const villainName = screen.getByText(villain.name)
            expect(villainName).toBeInTheDocument()
        })
    })
})


//NOT currently passing - does not get name from page (line 11)