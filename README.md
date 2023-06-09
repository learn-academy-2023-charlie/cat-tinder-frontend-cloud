Getting carried away:

VillainIndex
import React from "react"
import { Card, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap"
import { NavLink } from "react-router-dom"

const VillainIndex = ({ villains }) => {
  console.log(villains);
  return (
    <main className="villain-index-cards">
      {villains?.map((villain, index) => {
        return (
          <Card 
            style={{width:"14rem"}}
            key={index}
          >
            <img 
              alt={`profile of the villain ${villain.name}`} 
              src={villain.image} 
            />

            <CardBody>
              <CardTitle tag="h5">{villain.name}
              </CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  Age: {villain.age}
                </CardSubtitle>
              <Button>
                <NavLink to={`/villainshow/${villain.id}`} className="nav-link">
                    Fall for the dark side
                  </NavLink>
              </Button>
            </CardBody>
          </Card>
        )
      })}
    </main>
  )
}
  
export default VillainIndex;

VillainShow
import React from "react"
import { useParams } from "react-router-dom"

const VillainShow = ({ villains }) => {
  const { id } = useParams()
  let currentVillain = villains?.find(villain => villain.id === +id)

  return (   
    <main className="villain-show-cards">
      {currentVillain && (
        <>
          <img 
          alt={`profile of the villain ${currentVillain.name}`}
          src={currentVillain.image}
          classname="villain-show-img"
          />
        </>
      )}
    </main>
  )
}
  
export default VillainShow;


INDEX TESTING
// import { render } from "@testing-library/react"
// import VillainIndex from "../pages/VillainIndex"

// describe("<VillainIndex />", () => {
//     it("renders without crashing", () => {})
//     it("renders villain cards", () => {
//         const div = ddocument.createElement("div")
//         render(<VillainIndex villains={mockVillains} />, div)
//         mockVillains.forEach(villain => {
//             const villainName = screen.getByText(villain.name)
//             expect(villainName).toBeInTheDocument()
//         })
//     })
// })


SHOW TESTING
// import { render } from "@testing-library/react"
// import VillainShow from "../pages/VillainShow"

// describe("<VillainShow />", () => {
//   it("renders without crashing", () => {})
// })


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
