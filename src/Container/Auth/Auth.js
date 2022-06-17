import React, { useState } from 'react';
import { Form } from 'reactstrap';
import {ErrorMessage, Formik} from 'formik';
import * as yup from 'yup';


function Auth(props) {
    const [user, setUser] = useState('login');
    const [reset, setReset] = useState(false)

    let schema = yup.object().shape({
        email: yup.string().required("please enter your email id").email("please enter valid email id"),
        password: yup.string().required("please enter password"),
        createdOn: yup.date().default(function () {
            return new Date();
        }),
    });

    const formik = useFormik({
        initialValues: {
          email: '',
          password: ''
        },
        validationschema :schema,
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
})

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
                    <Formik values={Formik}>
                        <Form action method="Post" role="form" className="php-email-form">
                            {
                                reset === "true" ?
                                    null :
                                    user === "login" ?
                                        null
                                        :
                                        <div class="col-md-4 form-group">
                                            <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4"
                                                data-msg="Please enter at least 4 chars" />
                                            <div class="validate"></div>
                                            onChange={handleChange}
                                            <p>{error.email}</p>
                                        </div>
                            }
                            <div class="col-md-4 form-group mt-3 mt-md-0">
                                <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email"
                                    data-msg="Please enter a valid email" />
                                <div class="validate"></div>
                            </div>
                            <div class="col-md-4 form-group mt-3 mt-md-0">
                                <input type="password" className="form-control" name="password" id="password" placeholder="Your Password" data-rule="password"
                                    data-msg="Please enter a password" />
                                <div class="validate" />
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
                                        <span>Already have an account<button className='s-btn' onClick={() => { setReset('false'); setUser("signup") }}>Signup</button></span>
                                    </div>
                                    :
                                    <div className="text-center">
                                        <br>
                                        </br>
                                        <span>Create a new account ?</span><button className="s-btn" onClick={() => { setReset('false'); setUser("login") }}>Login</button>
                                    </div>
                            }
                            <br>
                            </br>
                            <div className="text-center"><button type="submit" className='s-btn' onClick={() => setReset('true')}>Forgot password</button></div>

                        </Form>
                    </Formik>
                    </div>
            </section>
        </center>
    )
};
export default Auth;