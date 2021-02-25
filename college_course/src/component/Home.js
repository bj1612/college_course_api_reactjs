import '../App.css';
import React,{useEffect} from 'react';
import { Jumbotron, Button } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';

const Home = (props) => {
  
  useEffect(()=>{
      document.title="Home ";
      console.log("home click");
  },[]);

  const notify = () => toast.error("info not available");
    return (
      <div>
        <Jumbotron className="text-center">
          <h1 className="display-3">Apni paathsaala</h1>
          <p className="lead">Thais page usually show differnt courses available in the college.</p>
          <hr className="my-2" />
          <p>Grab opportinuty for enrolling differnt courses available in the college.</p>
          <p className="lead">
            <Button color="primary" outline onClick={notify}>Learn More</Button>
          </p>
        </Jumbotron>
        <ToastContainer />
      </div>
    );
  }
export default Home;
