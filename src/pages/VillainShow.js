import React from "react";
import { useParams } from "react-router-dom";
import {
  Card,
  CardGroup,
  CardBody,
  CardTitle,
  CardSubtitle,
  Col,
  CardImg,
} from "reactstrap";

const VillainShow = ({ villains }) => {
  const { id } = useParams();
  let currentVillain = villains?.find((villain) => villain.id === +id);

  return (
    <main className="villain-show-cards">
      <br />
      <br />
      {currentVillain && (
        <>
          <div className="about">
            <Card style={{ width: "30%" }}>
              <img
                alt={`profile of the villain ${currentVillain.name}`}
                src={currentVillain.image}
                className="profile-pic"
              />
              {/* </Card> */}

              <CardBody className="card text-center">
                <CardTitle tag="h5">{currentVillain.name}</CardTitle>

                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  Age: {currentVillain.age}
                </CardSubtitle>

                <CardSubtitle className="mb-2 text-success" tag="h6">
                  Power: {currentVillain.power}
                </CardSubtitle>

                <CardSubtitle className="mb-2 text-danger" tag="h6">
                  Evil scheme: {currentVillain.evil_scheme}
                </CardSubtitle>
              </CardBody>
            </Card>

            <Card className="bio" style={{ width: "60%" }}>
              <CardBody>
                <p> My hobbies are: {currentVillain.hobbies} </p>

                <br />

                <p> {currentVillain.about} </p>
              </CardBody>
            </Card>
          </div>
        </>
      )}
    </main>
  );
};

export default VillainShow;
