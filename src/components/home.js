import * as React from 'react';
import {Container, Row, Col} from "react-bootstrap";

import heart from "../images/heart-icon.png";

class Home extends React.Component {

    render() {
        return(
            <div>
                <Container fluid={true}>
                    <Row className="home-header">
                        <Col xs={12} lg={12} className="home-title">
                            <h1 className="home-title-text">This is the Title</h1>
                            <p>And here is some other text</p>
                        </Col>
                        {/* <Col xs={12} lg={12}>
                            <p>And here is some other text</p>
                        </Col> */}
                    </Row>
                    <Row className="home-value">
                        <Col className="home-value-description">
                        <h2>Value</h2>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim 
                        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
                        ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        </Col>
                        <Col className="home-value-icon">
                        <img src={heart} className="home-heart-icon"/>
                        </Col>
                    </Row>
                </Container>

            </div>
        )
    }
}

export default Home;