import React,{useState} from 'react';
import {Button, Form} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Employees from "./file";
import {v4 as  uuid} from "uuid";
import  {useNavigate} from 'react-router-dom';


function Add(){
    const [name,setName]=useState("");
    const [age,setAge]=useState("");

    let history=useNavigate();
    const handleSubmit=(e)=>{
        e.preventDefault();
        const ids=uuid();
        let uniqueId=ids.slice(0,8);

        let a=name;
         let b=age;

        Employees.push ({ id:uniqueId,Name:a, Age:b}) ;
        history("/")  
    }

    
    return(
        <>
        <h1 className="text-center mt-5">Create</h1>
          <Form className="d-grid " style={{margin:"10rem"}}>
            <Form.Group className="mb-3" controlId="formName" >
                <Form.Control type="text" placeholder="Enter Name:" required onChange={(e)=>setName(e.target.value)}>
                </Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formAge" >
                <Form.Control type="text" placeholder="Enter Age:" required onChange={(e)=>setAge(e.target.value)}>
                </Form.Control>
                <Button className=" mt-4"  onClick={(e)=>handleSubmit(e)} type="submit">Submit</Button>
            </Form.Group>
          </Form>
          </>
    );
}
export default Add;
