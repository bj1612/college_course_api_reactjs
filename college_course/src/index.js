import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import Home from './component/Home';
import Allcourse from './component/Allcourse';
import Addcourse from './component/Addcourse';
import { Row,Col,Container} from 'reactstrap';
import Header from './component/Header';
import Menus from './component/Menus';
import { BrowserRouter as Router,Route} from "react-router-dom";
import EditCourse from './component/EditCourse';
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Container>
      <Header/>
      <Row>
        <Col md={2}>
          <Menus></Menus>
        </Col>
        <Col md={10}>
          <Route path="/" component={Home} exact />
          <Route path="/add-course" component={Addcourse} exact />
          <Route path="/view-course" component={Allcourse} exact />
          <Route path="/edit-course" component={EditCourse} exact />
        </Col>
      </Row>
    </Container>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
