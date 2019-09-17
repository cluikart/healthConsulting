import * as React from 'react';
import {Route, NavLink, HashRouter} from "react-router-dom";

import Home from "./home";
import About from "./about";
import Contact from "./contact";
import Quote from "./quote";
import Blog from "./blog";
import AgentLogin from "./agentLogin";
import RequestAccount from "./requestAccount";
import RequestSuccess from "./requestSuccess";

import AgentPortal from "./agentPortal";
import AgentAccount from "./agentAccount";
import AgentResources from "./agentResources";
import AgentAdmin from "./agentAdmin";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

import {Link} from "react-router-dom";


class Router extends React.Component {

    render() {
        return(
            <div>
                <HashRouter>
                <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark" className="navbar" fixed="top">
                    {/* <Navbar.Brand href="/"> Luikart Consulting</Navbar.Brand> */}
                    <Link to="/" className="nav-link-home">Luikart Consulting</Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto nav-link">
                        <Link to="/about" className="nav-link">About</Link>
                        <Link to="/contact" className="nav-link">Contact</Link>
                        <Link to="/quote" className="nav-link">Quote</Link>
                        <Link to="/blog" className="nav-link">Blog</Link>
                        <Link to="/agentLogin" className="nav-link">Agent Login</Link>
                        {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown> */}
                        </Nav>
                        <Nav>
                        <Nav.Link href="#deets">More deets</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Dank memes
                        </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                    
                    <div className="content">
                    {/* <Route exact path="/" component={Home}/> */}
                    <Route exact path="/" component={Home}/>
                    <Route path="/about" component={About}/>
                    <Route path="/contact" component={Contact}/>
                    <Route path="/quote" component={Quote}/>
                    <Route path="/blog" component={Blog}/>
                    <Route path="/agentLogin" component={AgentLogin}/>
                    <Route path="/requestAccount" component={RequestAccount}/>
                    <Route path="/requestSuccess" component={RequestSuccess}/>

                    <Route path="/agentPortal" component={AgentPortal}/>
                    <Route path="/agentPortal/account" component={AgentAccount}/>
                    <Route path="/agentPortal/resources" component={AgentResources}/>
                    <Route path="/agentPortal/admin" component={AgentAdmin}/>
                    </div>
                </HashRouter>
            </div>
        )
    }
}

export default Router;