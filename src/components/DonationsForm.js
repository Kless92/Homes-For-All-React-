import {Button, Label, Col, FormGroup} from 'reactstrap';
import {Formik, Field, Form, ErrorMessage} from 'formik';
import {validateDonationsForm} from '../utils/validateDonationsForm';
import { useDispatch } from "react-redux";
import { postData } from '../features/Voll&Don/dataSlice';

const DonationsForm = () => {
    const dispatch = useDispatch();
    const handleSubmit=(values, {resetForm}) => {
        const dontationData={
            firstName: values.firstName,
            lastName: values.lastName,
            phoneNum: values.phoneNum,
            email: values.email,
            amount: values.amount,
            sub: values.sub
        };
        dispatch(postData(dontationData));
        console.log('form vlaues:', values);
        console.log('in JSON format:', JSON.stringify(values));
        resetForm();
    };

    return(
        <Formik initialValues={{firstName:'', lastName:'', phoneNum:'', 
                                email:'', amount:'', sub:'Monthly'}} onSubmit={handleSubmit}
                                validate={validateDonationsForm}>
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

                <FormGroup row>
                    <Label htmlFor='amount' md='2'>
                        How much whould you like to donate?
                    </Label>
                    <Col md='10'>
                        <Field name='amount' placeHolder='Minimum of ten is required' className='form-control'/>
                        <ErrorMessage name='amount'>
                            {(msg) => <p className='text-danger'>{msg}</p>}
                        </ErrorMessage>
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Label md='2'>
                        Would you like to donate monthly or once?
                    </Label>
                    <Col md='10'>
                        <Field name='sub' as='select' className='form-control'>
                            <option>Monthly</option>
                            <option>Once</option>
                        </Field>
                    </Col>
                </FormGroup>
                
                <FormGroup row>
                    <Col md={{size:10, offset:2}}>
                        <Button type='submit' color='primary'>
                            Submit
                        </Button>
                    </Col>
                </FormGroup>
            </Form>
        </Formik>
    );
};
export default DonationsForm;