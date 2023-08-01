import React from "react";
import { Button,Table } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Employees from "./file";
import  {Link,useNavigate} from 'react-router-dom';



function Home(){
    let history=useNavigate();


    const handleUpdate=(id,name,age)=>{
        localStorage.setItem('Name',name);
        localStorage.setItem('Age',age);
        localStorage.setItem('Id',id);
    }

    const handleDelete=(id) => {
        // const updatedEmployees = Employees.filter(item => item.id !== id);
        var index=Employees.map(function(e){
            return e.id
        }).indexOf(id);
        Employees.splice(index,1);
        history('/');
    }
    return(
        <>
        <h1 className="text-center mt-5">
            Crud Operation
        </h1>
        <div style={{margin :"10rem"}}>
            <Table striped bordered center hover size="sm">
                <thead>
                    <tr>
                        <th>
                            Name
                        </th>
                        <th>
                            Age
                        </th>
                        <th>
                           Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Employees && Employees.length > 0
                        ?
                        Employees.map((item)=>{
                            return(
                                <tr>
                                    <td>
                                        {item.Name}
                                    </td>
                                    <td>
                                        {item.Age}
                                    </td>
                                    <td>
                                        <Link to="/edit">
                                        <Button onClick={()=>handleUpdate(item.id,item.Name,item.Age)} >Update</Button>
                                        </Link>
                                        &nbsp;
                                        <Button onClick={()=>handleDelete(item.id)}  >Delete</Button>
                                    </td>
                                </tr>
                                
                            )
                        })
                        :
                        "no data available"
                    }
                </tbody>
            </Table>
            <br>
            </br>
            <Link className ="d-grid "to="/create">
              <Button > Create
              </Button>
            </Link>
         </div>
        </>
    );
}
export default Home;