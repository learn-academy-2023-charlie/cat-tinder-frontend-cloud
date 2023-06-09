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
    setNewVillain({ ...newVillain, [e.target.name]: e.target.value });
  }
  const handleClick = () => {
    createVillain(newVillain)
    navigate("/villainindex")
  }
  return (
    <Form>
      <FormGroup>
        <Label for="name">Name</Label>
        <Input
          type="text"
          name="name"
          id="name"
          onChange={handleChange}
          value={newVillain.name}
        />
      </FormGroup>
      <FormGroup>
        <Label for="age">Age</Label>
        <Input
          type="number"
          name="age"
          id="age"
          onChange={handleChange}
          value={newVillain.age}
        />
      </FormGroup>
      <FormGroup>
        <Label for="hobbies">Hobbies</Label>
        <Input
          type="text"
          name="hobbies"
          id="hobbies"
          onChange={handleChange}
          value={newVillain.hobbies}
        />
      </FormGroup>
      <FormGroup>
        <Label for="power">Power</Label>
        <Input
          type="text"
          name="power"
          id="power"
          onChange={handleChange}
          value={newVillain.power}
        />
      </FormGroup>
      <FormGroup>
        <Label for="about">About</Label>
        <Input
          type="text"
          name="about"
          id="about"
          onChange={handleChange}
          value={newVillain.about}
        />
      </FormGroup>
      <FormGroup>
        <Label for="evil_scheme">Evil Scheme</Label>
        <Input
          type="text"
          name="evil_scheme"
          id="evil_scheme"
          onChange={handleChange}
          value={newVillain.evil_scheme}
        />
      </FormGroup>
      <FormGroup>
        <Label for="image">Image</Label>
        <Input
          type="text"
          name="image"
          id="image"
          onChange={handleChange}
          value={newVillain.image}
        />
      </FormGroup>
      <Button onClick={handleClick} type="submit">Submit</Button>
    </Form>
  );
};

export default VillainNew;
