import * as React from 'react';
import {Link, Redirect} from "react-router-dom";
import {Container, Row, Col} from "react-bootstrap";
import {Form, Button} from "react-bootstrap";


class AgentLogin extends React.Component {

    constructor(props) {
        super(props);
        this.setRedirect = this.setRedirect.bind(this);
        this.renderRedirect = this.renderRedirect.bind(this);
        this.state = {
            redirect: false,
        }
    }

    setRedirect() {
        this.setState({redirect: true});
        
    }

    renderRedirect() {
        if(this.state.redirect){
            return <Redirect to="/agentPortal/account"/>
        }
    }

    render() {
        return(
            <div>
                {this.renderRedirect()}
                <Container fluid={true}>
                    <Row className="login-row">
                        <Col lg={4} className="login-col">
                            <Form className="login-form">
                                <h2>Login</h2>
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
                                {/* <Form.Group controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Check me out" />
                                </Form.Group> */}
                                <Button variant="primary" type="submit" onClick={this.setRedirect}>
                                    Submit
                                </Button>
                                <Link to="/requestAccount">Request an account</Link>
                            </Form>
                        </Col>
                    </Row>
                </Container>

            </div>
        )
    }
}

export default AgentLogin;