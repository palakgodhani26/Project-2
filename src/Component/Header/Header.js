import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ThemeContext } from '../../Context/ThmeContext';
import Alert from '../Alert/Alert';
import { useDispatch } from 'react-redux';
import { signOutAction } from '../../Redux/Action/Auth.Action';;


function Header(props) {

    const value = useContext(ThemeContext);
    console.log(value);

    const dispatch = useDispatch();


    return (
        <div className="main-header">
            <div id="topbar" className={`d-flex align-items-center fixed-top ${value.theme}`}>
                <div className="container d-flex justify-content-between">
                    <div className="contact-info d-flex align-items-center">
                        <i className="bi bi-envelope" /> <a href="mailto:contact@example.com">cityhospital@example.com</a>
                        <i className="bi bi-phone" /> +91 9988776655
                    </div>
                    <div className="d-none d-lg-flex social-links align-items-center">
                        <a href="#" className="twitter"><i className="bi bi-twitter" /></a>
                        <a href="#" className="facebook"><i className="bi bi-facebook" /></a>
                        <a href="#" className="instagram"><i className="bi bi-instagram" /></a>
                        <a href="#" className="linkedin"><i className="bi bi-linkedin" /></a>
                    </div>
                    <button onClick={() => value.TOGGLE_THEME(value.theme)}>
                        Change Theme</button>
                        <Alert />
                </div>
            </div>
            <header id="header" className="fixed-top">
                <div className="container d-flex align-items-center">
                    <div className="logo">
                        <a href="index.html">
                            <h1 className="logo me-auto">City</h1><br />
                            <h2 className="logo-tiny-text me-auto">Multispeciality Hospital</h2>
                        </a>
                    </div>
                    <nav id="navbar" className="navbar order-last order-lg-0">
                        <ul>
                            <li>
                                <NavLink className="nav-link scrollto active" to={"/"}>Home</NavLink>
                            </li>
                            <li>
                                <NavLink className="nav-link scrollto active" to={"/department"}>Department</NavLink>
                            </li>
                            <li>
                                <NavLink className="nav-link scrollto" to={"/doctors"}>Doctors</NavLink>
                            </li>
                            <li>
                                <NavLink className="nav-link scrollto" to={"/about"}>About</NavLink>
                            </li>
                            <li>
                                <NavLink className="nav-link scrollto" to={"/contact"}>Contact</NavLink>
                            </li>
                            <li>
                                <NavLink className="nav-link scrollto" to={"/medicines"}>Medicines</NavLink>
                            </li>
                            <li>
                                <NavLink className="nav-link scrollto" to={"/refexample"}>Refexample</NavLink>
                            </li>
                        </ul>
                        <i className="bi bi-list mobile-nav-toggle" />
                    </nav>
                    <NavLink className="appointment-btn scrollto" to={"/BookAppointment"}>Appointment</NavLink>
                    <a href="#" className="appointment-btn scrollto">
                        <NavLink className="d-none d-md-inline" to={"/auth"}>Login/Signup</NavLink>
                    </a>
                    <span className="appointment-btn scrollto d-none d-md-inline" onClick={() => {dispatch(signOutAction()) }}>Logout</span>

                </div>
            </header>
        </div>
    );
}
export default Header;

