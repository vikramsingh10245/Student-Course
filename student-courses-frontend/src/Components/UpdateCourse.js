import React, { Fragment, useState ,useEffect} from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import base_url from "../APi/BootApi";

function  UpdateCourse() {
    const {id}=useParams();
    let navigate=useNavigate();
    const[course,setCourse]=useState({
        id:"",
        title:"",
        description:""
    })
    useEffect(()=>{
        getValueById();
    },[])
     

    function getValueById()
    {
        axios.get(`${base_url}/Courses/${id}`).then(
            (response)=>{
                
                setCourse(response.data)
            },
            (error)=>{
                console.warn(error)
            }
        )
    }
    // async function updateData()
    // {
    //    await axios.put(`${base_url}/Courses/${id}`,course).then(
    //         (response)=>{
    //             console.warn(response)
    //         },
    //         (error)=>{
    //             console.warn(error)
    //         }
    //     )
    // }
   async function handleSubmit(e)
    {

        e.preventDefault();
        await axios.put(`${base_url}/Courses/${id}`,course)
        navigate("/view-courses")
    }
    
   
    return (

        <Fragment>
            <h1>Update Course</h1>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <label for="userId">Course Id</label>
                    <Input type="text" placeholder="Enter Here" name="userId" id="userId" value={course.id}
                 onChange={(e) => setCourse({ ...course, id: e.target.value })}   ></Input>
                </FormGroup>
                <FormGroup>
                    <label for="title">Course Title </label>
                    <Input type="text" placeholder="Enter Here" id="title" value={course.title}
                     onChange={(e) => setCourse({ ...course, title: e.target.value })} ></Input>
                </FormGroup>
                <FormGroup>
                    <Label for="exampleText">Course Description </Label>
                    <Input type="textarea" placeholder="Enter Description" id="description" value={course.description} 
                     onChange={(e) => setCourse({ ...course, description: e.target.value })}  />
                </FormGroup>
                <Button color="success" style={{margin:9}} type="submit">Update </Button>
                <Button color="warning" >Cancle</Button>
            </Form>
        </Fragment>
    )
}
export default UpdateCourse