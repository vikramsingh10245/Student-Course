import React ,{useEffect}from "react";
import '../App.css';
import { Button,Container } from 'reactstrap';


function Home()
{
    useEffect(()=>{
        document.title="Home||Courses"
    },[])
    return(
        <div className="jumbotron">
            <h1>Let's Get Started</h1>
            <p>
            I've successfully built a project using Spring Boot, React.js, and MySQL, focused on managing courses. 
            It enables seamless addition, deletion, and updating of courses, along with a robust search functionality.
             With this project, I've demonstrated my proficiency in full-stack development and database management, 
             delivering a comprehensive solution for course management.
            </p>
            <Container>
                <Button color="primary" outline>Start Using</Button>
            </Container>
        </div>
    )
}
export default Home