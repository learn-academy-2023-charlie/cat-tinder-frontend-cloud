import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

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

  
  const handleChange = (e) => {
    setNewVillain({ ...newVillain, [e.target.name]: e.target.value })
  }
  const handleClick = () => {
    createVillain(newVillain)
  }

  return (

    <Form className="new-villain-form">
      <br>
      </br>
      <br>
      </br>
      <div class="form-group ms-5 mt-5">
        <div class="form-group row">
          <div class="form-group col col-md-4">
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
          <div class="form-group col-md-2">
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
          </div>
        </div>
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
        <div class="form-group col-md-4">
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
        </div>
        <div class="form-group col-md-6">
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
        </div>
        <div class="form-group col-md-4">
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
        </div>
        <div class="form-group col-md-4">
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
          <Button onClick={handleClick} href="/villainindex" type="submit" class="button">Join the forces of darkness</Button>
        </div>
      </div>
    </Form>
  );
};

export default VillainNew;
