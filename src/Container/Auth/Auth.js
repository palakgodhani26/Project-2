import React, { useState } from 'react';
import { Form } from 'reactstrap';
import { useFormik, Formik } from 'formik';
import * as yup from 'yup';
import { forgotPassword, signInAction, signUpAction } from '../../Redux/Action/Auth.Action';
import { useDispatch } from 'react-redux';


function Auth(props) {
    const [user, setUser] = useState('login');
    const [reset, setReset] = useState("false");

    let schemaObj, initVal;

    if (user === "login") {
        schemaObj = {
            email: yup.string().required("please enter your email id").email("please enter valid email id"),
            password: yup.string().required("please enter password"),
        }
        initVal = {
            email: '',
            password: '',

        }
    } else if (user === "Signup") {
        schemaObj = {
            name:yup.string().required("Please enter your Name."),
            email: yup.string().required("please enter your email id").email("please enter valid email id"),
            password: yup.string().required("please enter password"),
        }
        initVal = {
            name: '',
            email: '',
            password: '',
        }
    } else if (reset == "true") {
        schemaObj = {
            email :yup.string().required("Please enter email id.").email("please enter valid email id")
        }
        initVal = {
            email:''
        }
    }

    let schema = yup.object().shape(schemaObj);
    const dispatch = useDispatch();
    const handleData = (values) => {
        // let localData = JSON.parse(localStorage.getItem("user"));

        // if (localData === null) {
        //     localStorage.setItem("user", JSON.stringify([values]));

        // }else {
        //     localData.push(values);
        //     localStorage.setItem("user", JSON.stringify(localData));
        // }
        // console.log(values);
        dispatch(signUpAction(values));
    }

    const handleLogin = (values) => {
        //localStorage.setItem("user","123");
        dispatch(signInAction(values));
        //dispatch(forgotPasswordAction(values));
    }

    const formikobj = useFormik({
        initialValues: initVal,
        validationSchema: schema,

        onSubmit: values => {
            if(user==="login") {
                handleLogin(values);
            }else {
            handleData(values);
            }
        },
        enableReinitialize: true
    });

    const { handleChange, errors, handleSubmit, touched, handleBlur } = formikobj;

    return (
        <center>
            <section>
                <div className="container">
                    <div className="section-title">
                        {
                            reset === "true" ?
                                <h2>Forgot password</h2> :
                                user === "login" ?
                                    <h2>Login</h2> :
                                    <h2>Signup</h2>
                        }
                    </div>
                    <Formik values={formikobj}>
                        <Form onSubmit={handleSubmit} className="php-email-form">
                            {
                                reset === "true" ?
                                    null :
                                    user === "login" ?
                                        null
                                        :
                                        <div class="col-md-4 form-group">
                                            <input onChange={handleChange} onBlur={handleBlur} type="text" name="name" className="form-control" id="name" placeholder="Your Name" />
                                            <div class="validate"></div>
                                            <p>{errors.name && touched.name ? errors.name : ''}</p>
                                        </div>
                            }
                            <div class="col-md-4 form-group mt-3 mt-md-0">
                                <input onChange={handleChange} onBlur={handleBlur} type="text" className="form-control" name="email" id="email" placeholder="Your Email" />
                                <div class="validate"></div>
                                <p>{errors.email && touched.email ? errors.email : ''}</p>
                            </div>
                            <div class="col-md-4 form-group mt-3 mt-md-0">
                                <input onChange={handleChange} onBlur={handleBlur} type="password" className="form-control" name="password" id="password" placeholder="Your Password" />
                                <div class="validate" />
                                <p>{errors.password && touched.password ? errors.password : ''}</p>
                            </div>
                            {
                                reset === "true" ?
                                    <div class="text-center"><button type="submit">Submit</button></div>
                                    :
                                    user === "login" ?
                                        <div class="text-center"><button type="submit">Login</button></div>
                                        :
                                        <div class="text-center"><button className='s-btn' type="submit">Signup</button>
                                        </div>

                            }
                            {
                                user === "login" ?
                                    <div className="text-center">
                                        <br>
                                        </br>
                                        <span>Already have an account<a className='signup' onSubmit={handleSubmit} onClick={() => { setReset('false'); setUser("signup") }} type="Submit">Signup</a></span>
                                    </div>
                                    :
                                    <div className="text-center">
                                        <br>
                                        </br>
                                        <span>Create a new account ?</span><a className="login" onClick={() => { setReset('false'); setUser("login") }} type="Submit">Login</a>
                                    </div>
                            }
                            <br>
                            </br>
                            <div className="text-center"><a type="submit" className='signup' onClick={() => setReset('true')}>Forgot password</a></div>
                        </Form>
                    </Formik>
                </div>
            </section>
        </center>
    )
};
export default Auth;