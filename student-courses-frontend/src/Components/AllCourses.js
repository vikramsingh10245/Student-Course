import React,{useState,useEffect}from "react";
import Course from "./Course";
import base_url from "../APi/BootApi";
import axios from "axios";
import { toast } from "react-toastify";


function AllCourses()
{
    useEffect(()=>{
        document.title="All Courses"
        getAllCourses()

    },[])
    //function to call server
  function getAllCourses()  {
        axios.get(`${base_url}/Courses`)
          .then((response) => {
            // Success
            console.warn(response.data); // Access the data from the response
            toast.success("Data has been loaded")
            setcourses(response.data)
          })
          .catch((error) => {
            // Error
            console.warn(error);
            toast.error("Something Went Wrong")
          });
      };
    const[courses,setcourses]=useState([]);

    return(
        <div>
            <h1>All Courses</h1>
            <p>List of Courses are as Follows:</p>
           {
            courses.length>0?
            courses.map((item,index)=>(
              <Course course ={item} key={index}  update={getAllCourses}/>))
            :"No Courses found"
           }
        </div>
    );
};

export default AllCourses