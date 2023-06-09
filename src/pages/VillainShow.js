import React from "react"
import { useParams } from "react-router-dom"
import { NavLink } from "react-router-dom"
import { Card, CardGroup, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap"

const VillainShow = ({ villains }) => {
  const { id } = useParams()
  let currentVillain = villains?.find(villain => villain.id === +id)

  return (   
    <main className="villain-show-cards">
      <br />
      <br />
      {currentVillain && (
        <Card 
        style={{width:"60%"}}
        >
          <img 
            alt={`profile of the villain ${currentVillain.name}`} 
            src={currentVillain.image} 
            className="profile-pic"
          />

          <CardBody>
          <CardGroup>
            <CardTitle tag="h5">{currentVillain.name}
            </CardTitle>

            <CardSubtitle className="mb-2 text-muted" tag="h6">
              Age: {currentVillain.age}
            </CardSubtitle>

            <CardSubtitle className="mb-2 text-muted" tag="h6">
              Power: {currentVillain.power}
            </CardSubtitle>

            <CardSubtitle className="mb-2 text-muted" tag="h6">
              Evil scheme: {currentVillain.evil_scheme}
            </CardSubtitle>


          </CardGroup> 
          <CardGroup>
          </CardGroup>

          </CardBody>

        </Card>

      )}
    </main>
  )
}
  
export default VillainShow;

