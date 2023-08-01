import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Employees from "./file";
import { useNavigate } from "react-router-dom";

function Edit() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [id, setId] = useState("");
  let history = useNavigate();

  var index = Employees.map(function (e) {
    return e.id;
  }).indexOf(id);

  const handleSubmit = (e) => {
    e.preventDefault();
   
    let a = Employees[index];
    a.Name = name;
    a.Age = age;
    a.id = id;

    history("/");
  }

  useEffect(() => {

    setName(localStorage.getItem("Name"));
    setAge(localStorage.getItem("Age"));  
    setId(localStorage.getItem("Id"));


  }, []);

  return (
    <>
      <h1 className="text-center mt-5">Update</h1>
      <Form className="d-grid " style={{ margin: "10rem" }}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Control
            type="text"
            placeholder="Enter Name:"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formAge">
          <Form.Control
            type="text"
            placeholder="Enter Age:"
            value={age}
            required
            onChange={(e) => setAge(e.target.value)}
          ></Form.Control>
          <Button
            className=" mt-4"
            onClick={(e) => handleSubmit(e)}
            type="submit"
          >
            Update1
          </Button>
        </Form.Group>
      </Form>
    </>
  );
}
export default Edit;
