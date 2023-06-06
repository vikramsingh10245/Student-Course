import React from "react";
import { ListGroup } from "reactstrap";
import { Link } from "react-router-dom";

export const Menus=()=>{

    return(
        <div>
            <ListGroup>
                <Link className="list-group-item list-group-item-action" to="/">Home</Link>
                <Link className="list-group-item list-group-item-action" to="/add-course">Add Course</Link>
                <Link className="list-group-item list-group-item-action" to="/view-courses">View All Courses</Link>
                <Link className="list-group-item list-group-item-action" to="/search">Search</Link>
                <Link className="list-group-item list-group-item-action" to="/about">About</Link>
                
               
            </ListGroup>
        </div>
    );
}