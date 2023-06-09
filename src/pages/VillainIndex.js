import React from "react"
import { Card, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap"
import { NavLink } from "react-router-dom"

const VillainIndex = ({ villains }) => {
  console.log(villains);
  return (
    
    <main className="villain-index-cards">
      {villains?.map((villain, index) => {
        return (
          <div>
            <br />
            <br />
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
          </div>
        )
      })}
    </main>
  )
}
  
export default VillainIndex;