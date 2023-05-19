import {Button, Label, Col, Row, FormGroup} from 'reactstrap';
import {Formik, Field, Form, ErrorMessage} from 'formik';
import {validateVolunteerForm} from '../utils/validateVolunteerForm';

const VolunteerFrom = () => {
    const handleSubmit=(values, {resetForm}) => {
        console.log('form vlaues:', values);
        console.log('in JSON format:', JSON.stringify(values));
        resetForm();
    };

   
    return(
        <Formik initialValues={{firstName:'', lastName:'', phoneNum:'', email:'', 
                                contactType: 'Phone', info:'', refOne: false,
                                refTwo: false, refThr: false, refOneName:'',
                                refOneNum:'', refOneEmail:'', refTwoName:'',
                                refTwoNum:'', refTwoEmail:'', refThrName:'',
                                refThrNum:'', refThrEmail:''}} onSubmit={handleSubmit} 
                                validate={validateVolunteerForm}>
            <Form>
                <FormGroup row>
                    <Label htmlFor='firstName' md='2'>
                        First Name
                    </Label>
                    <Col md='10'>
                        <Field name='firstName' placeholder='First Name' className='form-control'/>
                        <ErrorMessage name='firstName'>
                            {(msg) => <p className='text-danger'>{msg}</p>}
                        </ErrorMessage>
                    </Col>
                </FormGroup>
                <FormGroup row>
                <Label htmlFor='lastName' md='2'>
                        Last Name
                    </Label>
                    <Col md='10'>
                        <Field name='lastName' placeholder='Last Name' className='form-control'/>
                        <ErrorMessage name='lastName'>
                            {(msg) => <p className='text-danger'>{msg}</p>}
                        </ErrorMessage>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label htmlFor='phoneNum' md='2'>
                        Phone Number
                    </Label>
                    <Col md='10'>
                        <Field name='phoneNum' placeholder='phone Number' className='form-control'/>
                        <ErrorMessage name='phoneNum'>
                            {(msg) => <p className='text-danger'>{msg}</p>}
                        </ErrorMessage>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label htmlFor='email' md='2'>
                        Email
                    </Label>
                    <Col md='10'>
                        <Field name='email' placeholder='Email' type='email' className='form-control'/>
                        <ErrorMessage name='email'>
                            {(msg) => <p className='text-danger'>{msg}</p>}
                        </ErrorMessage>
                    </Col>
                </FormGroup>
                
                <FormGroup>
                    <Label htmlFor='refOne' md='2'>Reference One</Label>
                    <Row>
                        <Col><Label htmlFor='refOneName' md='5'>Name</Label> </Col>
                        <Col><Label htmlFor='refOneNum' md='5'>Phone Number</Label> </Col> 
                        <Col><Label htmlFor='refOneEmail' md='5'>Email</Label> </Col> 
                    </Row>
                    <Row md='10'>
                        <Col>
                            <Field name='refOneName' placeholder='Name' className='form-control'/>
                            <ErrorMessage name='refOneName'>
                                {(msg) => <p className='text-danger'>{msg}</p>}
                            </ErrorMessage>
                        </Col>
                        <Col>
                            <Field name='refOneNum' placeholder='Number' className='form-control'/>
                            <ErrorMessage name='refOneNum'>
                                {(msg) => <p className='text-danger'>{msg}</p>}
                            </ErrorMessage>
                        </Col>
                        <Col>
                            <Field name='refOneEmail' placeholder='Email' type='email' className='form-control'/>
                            <ErrorMessage name='refOneEmail'>
                                {(msg) => <p className='text-danger'>{msg}</p>}
                            </ErrorMessage>
                        </Col>
                    </Row>
                    <Label htmlFor='refTwo' md='2'>Reference Two</Label> 
                    <Row>
                        <Col><Label htmlFor='refTwoName' md='5'>Name</Label> </Col> 
                        <Col><Label htmlFor='refTwoNum'md='5'>Phone Number</Label> </Col> 
                        <Col><Label htmlFor='refTwoEmail'md='5'>Email</Label> </Col> 
                    </Row>
                    <Row md='10'>
                        <Col>
                            <Field name='refTwoName' placeholder='Name' className='form-control'/>
                            <ErrorMessage name='refTwoName'>
                                {(msg) => <p className='text-danger'>{msg}</p>}
                            </ErrorMessage>
                        </Col>
                        <Col>
                            <Field name='refTwoNum' placeholder='Number' className='form-control'/>
                            <ErrorMessage name='refTwoNum'>
                                {(msg) => <p className='text-danger'>{msg}</p>}
                            </ErrorMessage>
                        </Col>
                        <Col>
                            <Field name='refTwoEmail' placeholder='Email' className='form-control'/>
                            <ErrorMessage name='refTwoEmail'>
                                {(msg) => <p className='text-danger'>{msg}</p>}
                            </ErrorMessage>
                        </Col>
                    </Row>
                    <Label htmlFor='refThr' md='2'>Reference Three</Label> 
                    <Row>
                        <Col><Label htmlFor='refThrName' md='5'>Name</Label> </Col> 
                        <Col><Label htmlFor='refThrNum' md='5'>Phone Number</Label> </Col> 
                        <Col><Label htmlFor='refThrEmail' md='5'>Email</Label> </Col> 
                    </Row>
                    <Row md='10'>
                        <Col>
                            <Field name='refThrName' placeholder='Name' className='form-control'/>
                            <ErrorMessage name='refThrName'>
                                {(msg) => <p className='text-danger'>{msg}</p>}
                            </ErrorMessage>
                        </Col>
                        <Col>
                            <Field name='refThrNum' placeholder='Number' className='form-control'/>
                            <ErrorMessage name='refThrNum'>
                                {(msg) => <p className='text-danger'>{msg}</p>}
                            </ErrorMessage>
                        </Col>
                        <Col>
                            <Field name='refThrEmail' placeholder='Email' className='form-control'/>
                            <ErrorMessage name='refThrEmail'>
                                {(msg) => <p className='text-danger'>{msg}</p>}
                            </ErrorMessage>
                        </Col>
                    </Row>

                </FormGroup>
                
                <FormGroup row>
                        <Col md={{size:10}}>
                            <Label md='4'>
                                Click to upload your resume.
                            </Label>
                            <Button name='resume' type='button' color='secondary'>
                                Resume
                            </Button>

                        </Col>
                    </FormGroup>
                
                    
                <FormGroup row>
                    <Label md='4'>
                        Do you prefer to be contacted by Phone or Email?
                    </Label>
                    <Col md='4'>
                        <Field name='contactType' as='select' className='form-control'>
                            <option>Phone</option>
                            <option>Email</option>
                        </Field>
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Label md='10'>
                        Any additional information?
                    </Label>
                    <Col md='10'>
                        <Field name='info' as='textarea' rows='12' className='form-control'/>
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Col md={{size:10, offset:5}}>
                        <Button type='submit' color='primary'>
                            Submit
                        </Button>
                    </Col>
                </FormGroup>
            </Form>
        </Formik>
    );
};
export default VolunteerFrom;