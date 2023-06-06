import React from "react";
import { Card,
    Button,
    CardBody,
    CardText,
    Container,
    CardSubtitle,
 } from "reactstrap";
import base_url from "../APi/BootApi";
import axios from "axios";
import { toast } from "react-toastify";

import { Link  } from "react-router-dom";

const Course=({course,update})=>{

    const deleteCourse=(id)=>{
        axios.delete(`${base_url}/Courses/${id}`).then(
            (response)=>{
                toast.success("Course daleted sucessfully")
                update();
            },
            (error)=>{
                toast.error("Something went wrong")
            }
        )
        
       
    }

 
    return(
        
        <Card>
            <CardBody>
                <CardSubtitle>
                <b>{course.title}</b>    
                </CardSubtitle>
                <CardText>
                    {course.description}
                </CardText>
                <Container className="text-center">
                    <Button color="danger" style={{margin:9}} onClick={()=>{
                        deleteCourse(course.id)
                    }}>Delete</Button>
                       <Link className='btn btn-outline-primary mx-2' to={`/update-course/${course.id}`} >Update</Link>
                </Container>
            </CardBody>
        </Card>
    )
}
export default Course