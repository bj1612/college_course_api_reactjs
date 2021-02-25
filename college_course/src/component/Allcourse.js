import '../App.css';
import React, { useState , useEffect} from 'react';
import Course from './Course';
import axios from 'axios';
import base_url from './Api';
import {toast } from 'react-toastify';

const Allcourse = () => {

     useEffect( () => {
        document.title="All courses";
        getAllCourses();
        console.log("all courses click");
    },[]);

    
    const [course,setCourse] = useState([])

    //upadating all corses after delete one course from course
    const updateAllCourse = (id)=>{
        setCourse(course.filter((c)=>c.id !== id));
    }

    //calling allcourses api
    const getAllCourses =()=>{
        axios.get(`${base_url}/courses`).then(
            (response)=>{
                //console.log(response);
                setCourse(response.data);
                toast.success("data loaded successfully");
            },
            (error)=>{
                console.log(error);
                toast.success("failed to load data");

            }
        );
    }
    return (
        <div className="text-center">
            <p className="h2">All Course</p>
            <p>Description of courses</p>
            {
                course.length>0 ?course.map((item)=>(
                    <Course key={item.id} course={item} update={updateAllCourse}/>
                )): "Not available"
            }
            
        </div>
    
    );
} 

export default Allcourse;