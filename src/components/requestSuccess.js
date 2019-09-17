import * as React from 'react';
import {Container, Row, Col} from "react-bootstrap";
import {Form, Button} from "react-bootstrap";

class RequestSuccess extends React.Component {

    render() {
        return(
            <div>
                <Container fluid={true}>
                    <Row className="login-row">
                        <Col lg={4} className="login-col">
                            <h2>Request Successful!</h2>
                            <p>An email will be sent to you upon account activation</p>
                        </Col>
                    </Row>
                 </Container>       

            </div>
        )
    }
}

export default RequestSuccess;