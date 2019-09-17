import * as React from 'react';
import * as yup from "yup";
import {Formik} from "formik";
import {Container, Row, Col} from "react-bootstrap";
import {Form, Button, InputGroup} from "react-bootstrap";

class Quote extends React.Component {

    render() {
        const schema = yup.object({
            firstName: yup.string().required(),
            lastName: yup.string().required(),
            username: yup.string().required(),
            city: yup.string().required(),
            state: yup.string().required(),
            zip: yup.string().required(),
            address: yup.string().required(),
            address2: yup.string().required(),
            birthday: yup.string().required(),
            email: yup.string().required(),
            phone: yup.string().required(),
            terms: yup.bool().required(),
          });

        return(
            <div>
                
                <Container>
                    <Row className="quote-row">
                        <Col md={8} className="quote-col card-style">

                            <Formik
                            validationSchema={schema}
                            onSubmit={console.log}
                            initialValues={{
                                firstName: 'Mark',
                                lastName: 'Otto',
                            }}
                            >
                            {({
                                handleSubmit,
                                handleChange,
                                handleBlur,
                                values,
                                touched,
                                isValid,
                                errors,
                            }) => (
                                <Form noValidate onSubmit={handleSubmit}>
                                <Form.Row>
                                    <Form.Group as={Col} md="4" controlId="validationFormik01">
                                    <Form.Label>First name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="firstName"
                                        value={values.firstName}
                                        onChange={handleChange}
                                        isValid={touched.firstName && !errors.firstName}
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group as={Col} md="4" controlId="validationFormik02">
                                    <Form.Label>Last name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="lastName"
                                        value={values.lastName}
                                        onChange={handleChange}
                                        isValid={touched.lastName && !errors.lastName}
                                    />

                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group as={Col} md="4" controlId="validationFormikUsername">
                                    <Form.Label>Username</Form.Label>
                                    <InputGroup>
                                        <InputGroup.Prepend>
                                        <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <Form.Control
                                        type="text"
                                        placeholder="Username"
                                        aria-describedby="inputGroupPrepend"
                                        name="username"
                                        value={values.username}
                                        onChange={handleChange}
                                        isInvalid={!!errors.username}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                        {errors.username}
                                        </Form.Control.Feedback>
                                    </InputGroup>
                                    </Form.Group>
                                </Form.Row>
                                <Form.Row>
                                    <Form.Group as={Col} md="4" controlId="validationFormik03">
                                        <Form.Label>Date of Birth</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="mm/dd/yyyy"
                                            name="birthday"
                                            value={values.birthday}
                                            onChange={handleChange}
                                            isInvalid={!!errors.birthday}
                                        />

                                        <Form.Control.Feedback type="invalid">
                                            {errors.birthday}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group as={Col} md="4" controlId="validationFormik03">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="username@"
                                            name="email"
                                            value={values.email}
                                            onChange={handleChange}
                                            isInvalid={!!errors.email}
                                        />

                                        <Form.Control.Feedback type="invalid">
                                            {errors.email}
                                        </Form.Control.Feedback>
                                    </Form.Group>

                                    <Form.Group as={Col} md="4" controlId="validationFormik03">
                                        <Form.Label>Primary Phone</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="(###)-###-####"
                                            name="phone"
                                            value={values.phone}
                                            onChange={handleChange}
                                            isInvalid={!!errors.phone}
                                        />

                                        <Form.Control.Feedback type="invalid">
                                            {errors.phone}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Form.Row>
                                <Form.Row>
                                    <Form.Group as={Col} md="4" controlId="validationFormik03">
                                    <Form.Label>City</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="City"
                                        name="city"
                                        value={values.city}
                                        onChange={handleChange}
                                        isInvalid={!!errors.city}
                                    />

                                    <Form.Control.Feedback type="invalid">
                                        {errors.city}
                                    </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group as={Col} md={4} controlId="formGridState">
                                    <Form.Label>State</Form.Label>
                                    {/* <Form.Control as="select">
                                        <option>Choose...</option>
                                        <option>...</option>
                                    </Form.Control> */}
                                    
                                    <Form.Control
                                        type="text"
                                        placeholder="State"
                                        name="state"
                                        value={values.state}
                                        onChange={handleChange}
                                        isInvalid={!!errors.state}
                                        as="select"
                                    >
                                        <option>Choose...</option>
                                        <option>...</option>
                                    </Form.Control>
                                    <Form.Control.Feedback type="invalid">
                                        {errors.state}
                                    </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group as={Col} md="4" controlId="validationFormik05">
                                    <Form.Label>Zip</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Zip"
                                        name="zip"
                                        value={values.zip}
                                        onChange={handleChange}
                                        isInvalid={!!errors.zip}
                                    />

                                    <Form.Control.Feedback type="invalid">
                                        {errors.zip}
                                    </Form.Control.Feedback>
                                    </Form.Group>
                                </Form.Row>
                                <Form.Row>
                                <Form.Group as={Col} md="6" controlId="validationFormik03">
                                    <Form.Label>Address #1</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="address"
                                        name="address"
                                        value={values.address}
                                        onChange={handleChange}
                                        isInvalid={!!errors.address}
                                    />

                                    <Form.Control.Feedback type="invalid">
                                        {errors.address}
                                    </Form.Control.Feedback>
                                    </Form.Group>

                                    <Form.Group as={Col} md="6" controlId="validationFormik03">
                                    <Form.Label>Address #2</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="address"
                                        name="address2"
                                        value={values.address2}
                                        onChange={handleChange}
                                        isInvalid={!!errors.address2}
                                    />

                                    <Form.Control.Feedback type="invalid">
                                        {errors.address2}
                                    </Form.Control.Feedback>
                                    </Form.Group>
                                </Form.Row>
                                

                                <Form.Group>
                                    <Form.Check
                                    required
                                    name="terms"
                                    label="Agree to terms and conditions"
                                    onChange={handleChange}
                                    isInvalid={!!errors.terms}
                                    feedback={errors.terms}
                                    id="validationFormik0"
                                    />
                                </Form.Group>
                                <Button type="submit">Submit form</Button>
                                </Form>
                            )}
                            </Formik>
            
                        </Col>
                    </Row>
                </Container>

            </div>
        )
    }
}

export default Quote;