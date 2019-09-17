import * as React from 'react';
import {Container, Row, Col} from "react-bootstrap";
import {Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";
import {Helmet} from "react-helmet";

class AgentPortal extends React.Component {

    render() {
        return(
            <div className="portal-wrapper">
                <Helmet>
                    <style>{'body {background-color: #E9E9E9}'}</style>
                </Helmet>
                {/* <Container>
                    <Row className="agent-nav-row" >
                        <Col> */}
                {/* <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark" className="navbar" >
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav"> */}
                <Nav defaultActiveKey="/home" className="flex-column agent-nav" >
                   <p className="agent-nav-title">MENU</p>
                    <Link to="/agentPortal/account" className="agent-nav-link">Account</Link>
                   
                    <Link to="/agentPortal/resources" className="agent-nav-link">Resources</Link>
                    
                    <Link to="/agentPortal/admin" className="agent-nav-link">Admin</Link>
                    {/* <Link to="/blog" className="agent-nav-link">Blog</Link>
                    <Link to="/agentLogin" className="agent-nav-link">Agent Login</Link> */}
                   
                    {/* <Nav.Link eventKey="disabled" disabled>
                        Disabled
                    </Nav.Link> */}
                </Nav>
                {/* </Navbar.Collapse>
                </Navbar> */}
                 {/* </Col>
                    </Row>
                </Container> */}

                {/* <Container>
                    <Row className="agent-nav-row" >
                        <Col lg={2}></Col>
                        </Row>
                </Container>   
                <Container>
                    <Row className="agent-nav-row" >
                        <Col lg={2}></Col>
                        </Row>
                </Container>         */}

                <Container>
                    <Row className="agent-portal-row">
                        <Col lg={6} className="agent-portal-col">
                            <h2>Agent Portal</h2>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default AgentPortal;