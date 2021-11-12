import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from "react-router-dom";
import useAuth from '../../Hooks/useAuth';
import useFirebase from '../../Hooks/useFirebase';

import logo from '../../images/logo (1).png'
const Navigation = () => {

  const {user,logOut}=useAuth()

    return (
        <div>
        <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand as={NavLink} className="text-white" to="/home">
            <img width="100px" src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="navbar-nav ml-auto mt-2 mt-lg-0"/>
            <Nav.Link as={NavLink} to="/home" className="text-black">
                Home
              </Nav.Link>

              <Nav.Link as={NavLink} to="/viewAll" className="text-black">
                All Products
              </Nav.Link>
              {user?.email&&<Nav.Link as={NavLink} to="/dashBoard" className="text-black">
                DashBoard
              </Nav.Link>}
              
                       { 
                            user?.email ?
                                <Link to="/home">
                                    <button onClick={logOut} className="btn btn-warning me-2" >Log-out</button>
                                </Link>
                                :
                                <Link to="/login">
                                    <button className="btn btn-warning me-2" >Log In</button>
                                </Link>

                        }
                <Nav.Link as={NavLink} to="/name" className="text-black">{user?.displayName}</Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
        </div>
    );
};

export default Navigation;