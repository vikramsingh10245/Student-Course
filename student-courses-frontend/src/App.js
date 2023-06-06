import React from 'react';
import './App.css';
import { ToastContainer } from 'react-toastify';
import Home from './Components/Home';
import AllCourses from './Components/AllCourses';
import { AddCourse } from './Components/AddCourse';
import { Col, Container, Row } from 'reactstrap';
import Header from './Components/Header';
import { Menus } from './Components/Menus';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UpdateCourse from './Components/UpdateCourse';
import Search from './Components/Search';
import About from './Components/About';

function App() {

  return (
    <div className="App">
      <Router>
        <ToastContainer />
        <Container>
          <Header />
          <Row>
            <Col md={4} style={{ border: 3, color: 'black' }}>
              <Menus />
            </Col>
            <Col md={8}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/add-course" element={<AddCourse />} />
                <Route path="/view-courses" element={<AllCourses />} />
                <Route path="/update-course/:id" element={<UpdateCourse />} />
                <Route path="/search" element={<Search />} />
                <Route path="/about" element={<About />} />
              </Routes>
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  );
}

export default App;
