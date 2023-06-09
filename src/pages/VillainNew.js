import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { useNavigate } from "react-router-dom";

const VillainNew = ({ createVillain }) => {
  const [newVillain, setNewVillain] = useState({
    name: "",
    age: "",
    hobbies: "",
    power: "",
    about: "",
    evil_scheme: "",
    image: "",
  })

  const navigate = useNavigate()
  
  const handleChange = (e) => {
    setNewVillain({ ...newVillain, [e.target.name]: e.target.value })
  }
  const handleClick = () => {
    createVillain(newVillain)
    navigate("/villainindex")
  }

  //working on: styling form, add padding so it doesn't get stuck behind toolbar. CSS and bootstrap aren't playing nice though
  return (
    <Form className="new-villain-form">
      <div class="form-group">
        <FormGroup>
          <Label for="villain-name" class="form-label">Name</Label>
          <Input
            id="villain-name"
            type="text"
            name="name"
            placeholder="evil title here..."
            onChange={handleChange}
            value={newVillain.name}
          />
          </FormGroup>
        </div>
        <div class="form-group col-md-1">
          <FormGroup>
            <Label for="villain-age" class="form-label">Age</Label>
            <Input
            id="villain-age"
            type="number"
            name="age"
            placeholder="age goes here"
            onChange={handleChange}
            value={newVillain.age}
            />
          </FormGroup>
        <div class="form-group col-md-4">
          <FormGroup>
            <Label for="villain-power" class="form-label">Power</Label>
            <Input
              type="text"
              name="power"
              placeholder="superstrength, telekinesis, sorcery..."
              id="villain-power"
              onChange={handleChange}
              value={newVillain.power}
            />
          </FormGroup>
          </div>
      </div>
      <FormGroup>
        <Label for="villain-hobbies" class="form-label">Hobbies</Label>
        <Input
          id="villain-hobbies"
          type="text"
          placeholder="enjoys world domination, walks on the beach at sunset..."
          name="hobbies"
          onChange={handleChange}
          value={newVillain.hobbies}
        />
      </FormGroup>
      <FormGroup>
        <Label for="villain-about" class="form-label">About</Label>
        <Input
          type="textarea"
          name="about"
          placeholder="Tell us about you"
          id="villain-about"
          onChange={handleChange}
          value={newVillain.about}
        />
      </FormGroup>
      <FormGroup>
        <Label for="villain-evil_scheme" class="form-label">Evil Scheme</Label>
        <Input
          type="text"
          name="evil_scheme"
          placeholder="...share if you dare"
          id="villain-evil_scheme"
          onChange={handleChange}
          value={newVillain.evil_scheme}
        />
      </FormGroup>
      <FormGroup>
        <Label for="villain-image" class="form-label">Image</Label>
        <Input
          type="text"
          name="image"
          placeholder="URL to your image here"

          id="villain-image"
          onChange={handleChange}
          value={newVillain.image}
        />
      </FormGroup>
      <Button onClick={handleClick} type="submit" class="button">Join the forces of darkness</Button>
    </Form>
  );
};

export default VillainNew;
