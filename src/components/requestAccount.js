import * as React from 'react';
import {Container, Row, Col} from "react-bootstrap";
import {Form, Button} from "react-bootstrap";


class RequestAccount extends React.Component {

    render() {
        return(
            <div>
                <Container fluid={true}>
                    <Row className="login-row">
                        <Col lg={4} className="login-col">
                            <Form className="login-form">
                                <h2>Request an Account</h2>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                    <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Re-Enter Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                                {/* <Form.Group controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Check me out" />
                                </Form.Group> */}
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                                
                            </Form>
                        </Col>
                    </Row>
                </Container>

            </div>
        )
    }
}

export default RequestAccount;