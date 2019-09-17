import * as React from 'react';
import {Container, Row, Col} from "react-bootstrap";
import {Form, Button} from "react-bootstrap";

import facebook from "../images/facebook-logo-icon.png";
import twitter from "../images/twitter-icon-vector.png";
import linkedin from "../images/linkedin_icon.png";

class Contact extends React.Component {

    render() {
        return(
            <div >
                <Container fluid={true}>
                    <Row className="home-header contact-header">
                        <Col xs={12} lg={4} className="home-title contact-col">
                            <h1 className="home-title-text">Say Hello</h1>
                            <p>And here is some other text</p>
                        </Col>
                        <Col xs={12} lg={{span: 4, offset: 2}} className="contact-col">
                        <Form.Label className="contact-email-label">Send us an Email</Form.Label>
                        <Form.Group controlId="exampleForm.ControlTextarea1" className="shadow">
                            
                            <Form.Control as="textarea" rows="15" />
                        </Form.Group>
                        <Button variant="primary" type="submit" className="shadow">
                            Submit
                        </Button>
                        </Col>
                        <Col lg={1} className="contact-col">
                            <img src={facebook} className="contact-media-icon"/>
                            <img src={twitter} className="contact-media-icon"/>
                            <img src={linkedin} className="contact-media-icon"/>
                        </Col>
                        {/* <Col xs={12} lg={12}>
                            <p>And here is some other text</p>
                        </Col> */}
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Contact;