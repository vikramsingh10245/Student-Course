import React, { Fragment,useEffect, useState } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { toast } from "react-toastify";
import axios from "axios";
import base_url from "../APi/BootApi";

export const AddCourse = () => {
    useEffect(()=>{
        document.title="Add Course"
    },[])
    const [course,SetCourse]=useState({});
     //form handler function
     function handleForm(e)
     {
        postDataToServer(course);
        e.preventDefault();
        
     }
     //creating function to post data into server
     const postDataToServer=(data)=>{
        axios.post(`${base_url}/Courses`,data).then(
            (response)=>{
                
                toast.success("sucess corese added")
            },
            (error)=>{
                console.warn(error)
                console.warn("Error")
            }
        )
     }
    return (
        <Fragment>
            <h1>Fill Course Details</h1>
            <Form onSubmit={handleForm}>
                <FormGroup>
                    <label for="userId">Course Id</label>
                    <Input type="text" placeholder="Enter Here" name="userId" id="userId" 
                    onChange={(e)=>{
                    SetCourse({...course,id:e.target.value})}}></Input>
                </FormGroup>
                <FormGroup>
                    <label for="title">Course Title </label>
                    <Input type="text" placeholder="Enter Here" id="title" 
                    onChange={(e)=>{
                        SetCourse({...course,title:e.target.value})
                    }} ></Input>
                </FormGroup>
                <FormGroup>
                    <Label for="exampleText">Course Description </Label>
                    <Input type="textarea" placeholder="Enter Description" id="description" 
                    onChange={(e)=>{
                        SetCourse({...course,description:e.target.value})
                    }} />
                </FormGroup>
                <Button type="submit" color="success" style={{margin:9}} onC>Add Course</Button>
                <Button color="warning" type="reset">Clear</Button>
            </Form>
        </Fragment>
    )
}