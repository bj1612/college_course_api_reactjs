import '../App.css';
import React from 'react';
import { Card, CardText, CardBody,CardSubtitle, Button, Container} from 'reactstrap';
import axios from 'axios';
import base_url from './Api';
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const Course = ({course,update}) => {
 const  deleteFromServer=(id)=>{
   axios.delete(`${base_url}/courses/${id}`).then(
     (response)=>{
       update(id);
       toast.success("deleted");
     },
     (error)=>{
       toast.warning("falied");
     }
   )

  }
    return (
      <div>
        <Card>
          <CardBody className="text-center">
              <CardSubtitle className="h3">{course.title}</CardSubtitle>
              <CardText>{course.description}</CardText>
              <Container>
                  <Button type="button" outline color="success m-2" onClick={()=>{
                    deleteFromServer(course.id);
                  }}> Delete</Button>
                  
                  <Link to="/edit-course">
                    <Button outline color="danger m-2" >Update</Button>
                  </Link>
              </Container>
          </CardBody>
        </Card>
        <ToastContainer/>
       </div>
    );
}

export default Course;