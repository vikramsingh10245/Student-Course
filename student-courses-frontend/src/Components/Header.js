
import React from "react";
import { CardBody,Card } from "reactstrap";

export default function Header()
{
    return(
        <div>
            <Card  className=" bg-warning" style={{margin:10}}>
                <CardBody>
                <h1 style={{margin:10}}>Welcome to Courses</h1>
                </CardBody>
            </Card>
            
        </div>
    )
}