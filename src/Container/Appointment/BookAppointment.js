import React from 'react';
import { Form, useFormik, Formik } from 'formik';
import * as yup from 'yup';
import { NavLink, useHistory } from 'react-router-dom';

function BookAppointment(props) {
    const history = useHistory();

    let Schema = yup.object().shape({
        name: yup.string().required("Please enter name."),
        email: yup.string().email("Please enter valid email").required("Please enter email"),
        phone: yup.string().required("Please enter your number"),
        date: yup.string().required("Please select date"),
        department: yup.string().required("Please select department"),
        message: yup.string().required("please enter message"),

    });

    const formikObj = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            date: '',
            department: '',
            message: ''
        },
        validationSchema: Schema,
        onSubmit: values => {
            handleInsert(values);
            
        },
    });

    const { handleBlur, handleChange, handleSubmit, errors, touched,values } = formikObj;

    const handleInsert = (values) => {
        let localData = JSON.parse(localStorage.getItem("apt"));

        let id = Math.floor(Math.random() * 1000);

        let data = {
            id: id,
            ...values
        }

        if (localData === null) {
            localStorage.setItem("apt", JSON.stringify([data]));
        } else {
            localData.push(data);
            localStorage.setItem("apt", JSON.stringify(localData));
        }

        history.push("/ListAppointment");
        console.log([data]);
    }



    return (
        <div>
            <main>
                <section id="appointment" className="appointment">
                    <div className="container">
                        <div className="section-title">
                            <h2>Make an Appointment</h2>
                            <div className='row'>
                                <div className='col-6'>
                                    <NavLink to={"/BookAppointment"}>BookAppointment</NavLink>
                                </div>
                                <div className='col-6'>
                                    <NavLink to={"/ListAppointment"}>ListAppointment</NavLink>
                                </div>
                            </div>
                        </div>
                        <Formik values={formikObj}>
                            <Form className="php-email-form" onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-md-4 form-group">
                                        <input
                                            type="text"
                                            name="name"
                                            className="form-control"
                                            id="name"
                                            placeholder="Your Name"
                                            onChange={handleChange}
                                            onBlur={handleBlur} />
                                        {errors.name && touched.name ? errors.name : ''}
                                        <div className="validate" />
                                    </div>

                                    <div className="col-md-4 form-group">
                                        <input
                                            type="type"
                                            name="email"
                                            className="form-control"
                                            id="email"
                                            placeholder="Your email"
                                            onChange={handleChange}
                                            onBlur={handleBlur} />
                                        {errors.email && touched.email ? errors.email : ''}
                                        <div className="validate" />
                                    </div>

                                    <div className="col-md-4 form-group">
                                        <input
                                            type="tel"
                                            name="phone"
                                            className="form-control"
                                            id="phone"
                                            placeholder="Your phone"
                                            onChange={handleChange}
                                            onBlur={handleBlur} />
                                        {errors.phone && touched.phone ? errors.phone : ''}
                                        <div className="validate" />
                                    </div>

                                    <div className="col-md-4 form-group">
                                        <input
                                            type="date"
                                            name="date"
                                            className="form-control"
                                            id="date"
                                            placeholder="date"
                                            onChange={handleChange}
                                            onBlur={handleBlur} />
                                        {errors.date && touched.date ? errors.date : ''}
                                        <div className="validate" />
                                    </div>

                                    <div className="col-md-4 form-group">
                                        <select  value={values.department} onChange={handleChange} onBlur={handleBlur} name="department" id="department" className="form-select">
                                            <option value="">Select</option>
                                            <option value="Department 1">Department 1</option>
                                            <option value="Department 2">Department 2</option>
                                        </select>
                                        <p className='text-color'>
                                        {errors.department && touched.department ? errors.department : ''}
                                        </p>
                                        <div className="validate" />
                                    </div>
                                </div>
                                <div className='form-group-mt-3'>
                                    <textarea className="form-control"
                                        name="message"
                                        rows={5}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    <div className="validate" />
                                </div>

                            <div className="mb-3">
                                <div className="loading">Loading</div>
                                <div className="error-message"></div>
                                <div className="sent-message">Your appointment request has been sent successfully. Thank you!</div>
                            </div>
                            <div className="text-center"><button type="submit">Make an Appointment</button></div>
                        </Form>
                    </Formik>
                </div>
            </section>
        </main>
        </div >
    );
}


export default BookAppointment;