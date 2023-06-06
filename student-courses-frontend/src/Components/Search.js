import React, {  useState } from "react";
import { Button, Form,Input,Label } from "reactstrap";
import base_url from "../APi/BootApi";
import axios from "axios";
import { toast } from "react-toastify";


function Search()
{
    const[data,setData]=useState("");
    let searchobj=null;
    function handelForm(e)
    {
        console.warn(data)
        e.preventDefault();
    }
    
    async function searchData()
     {
       searchobj =await axios.get(`${base_url}/Courses/title/${data}`)
       searchobj.data.id!=null?
       toast.success(
        <div>
          <p>id: {searchobj.data.id}</p>
          <p>title: {searchobj.data.title}</p>
          <p>description: {searchobj.data.description}</p>
        </div>
      ):toast.error("No Data Found")
      

     }

    return(
        <div>
            <Form onSubmit={handelForm}>
            <Label for="exampleText">Search </Label>
            <Input type="text" placeholder="Enter any key" value={data} onChange={(e) => setData(e.target.value)} />
                <Button type="Submit" onClick={searchData} style={{margin:15}}>Search</Button>
            </Form>
        </div>
    )
}
export default Search