import * as React from 'react';
import {Container, Row, Col} from "react-bootstrap";

class AgentAccount extends React.Component {

    render() {
        return(
            <div>
               <Container>
                    <Row className="agent-account-row agent-portal-header-row">
                        <Col md={{span: 3, offset: 0}} className="agent-account-col agent-portal-header-col">
                            <h3>My Account</h3>
                        </Col>
                    </Row>
                    <Row className="agent-account-row manage" noGutters={true}>
                        <Col md={5} className="agent-account-col  agent-account-col-manage">
                            <p className="agent-subheader">Manage Account</p>
                        </Col>
                    </Row>
                    <Row className="agent-account-row manage" noGutters={true}>
                        <Col md={5} className="agent-account-col  agent-account-col-manage">
                            <p className="agent-subheader">Notifications</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default AgentAccount;