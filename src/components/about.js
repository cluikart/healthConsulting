import * as React from 'react';
import {Container, Row, Col} from "react-bootstrap";

class About extends React.Component {

    render() {
        return(
            <div>
                <Container fluid={true}>
                    <Row className="home-header">
                        <Col xs={12} lg={12} className="home-title">
                            <h1 className="home-title-text">About Us </h1>
                            <p>And here is some other text</p>
                        </Col>
                        {/* <Col xs={12} lg={12}>
                            <p>And here is some other text</p>
                        </Col> */}
                    </Row>
                    <Row >
                        <Col xs={12} lg={4} className="about-our">
                            <h2>Our Mission</h2>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim 
                        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
                        ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </Col>
                        <Col xs={12} lg={4} className="about-our">
                            <h2>Our Experience</h2>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim 
                        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
                        ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </Col>
                        <Col xs={12} lg={4} className="about-our">
                            <h2>Our People</h2>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim 
                        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
                        ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </Col>
                    </Row>
                    <Row className="about-people-row">
                       <Col lg={12}>
                            <h2>Meet Us</h2>
                       </Col> 
                        <Col lg={2} className="about-people-col">
                            <h3  className="about-people-name">Kim Luikart</h3>
                        </Col>
                        <Col lg={2}className="about-people-col">
                            <h3 className="about-people-name">Chris Luikart</h3>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default About;