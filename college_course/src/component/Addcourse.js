import '../App.css';
import React ,{useEffect, useState}from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';
import base_url from './Api';
import { ToastContainer, toast } from 'react-toastify';


const Addcourse = () =>{
    
    useEffect(()=>{
        document.title="Add course";
    },[]);

    const [course,setCourses] = useState({});
    const formHandler = (e) =>{
        console.log(course);
        postDataToServer(course);
        e.preventDefault();
    }
    //post data to server

    const postDataToServer=(data)=>{
        axios.post(`${base_url}/courses`,data).then(
            (response)=>{
                console.log("success");
                toast.success("add sucessfully");


            },
            (error)=>{
                console.log("Failed");
                toast.warning("failed");
            }
        )
    }
    return (
        <div>
            <Form onSubmit={formHandler}> 
            <FormGroup>
                <Label for="courseid">Course Id</Label>
                <Input type="text" 
                name="courseid" 
                id="courseid" 
                placeholder="Enter Course Id" 
                onChange={(e)=>{
                    setCourses({...course,id:e.target.value});
                }}
                />
            </FormGroup>

            <FormGroup>
                <Label for="title">Title</Label>
                <Input type="text" name="title" id="title" placeholder="Enter Course titile"
                onChange={(e)=>{
                    setCourses({...course,title:e.target.value});
                }} />
            </FormGroup>

            <FormGroup>
                <Label for="description">Description</Label>
                <Input type="text" name="description" id="description" placeholder="Enter descriptionr"
                 onChange={(e)=>{
                    setCourses({...course,description:e.target.value});
                }} />
            </FormGroup>
            <FormGroup className="text-center">            
                <Button type="submit" color="success m-2">Add Course</Button>
                <Button color="danger m-2" >Cancel</Button>
            </FormGroup>
            </Form>
            <ToastContainer/>
        </div>
    )
}
export default Addcourse;