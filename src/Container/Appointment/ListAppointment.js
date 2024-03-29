import { Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { Card, CardBody, CardTitle, CardSubtitle, Button, CardText } from 'reactstrap';

function ListAppointment(props) {

    const history = useHistory();

    let [data, setData] = useState([]);

    const dData = () => {

        let localData = JSON.parse(localStorage.getItem("apt"));
        if(localData !== null){
            setData(localData);
        }       
    }

    useEffect(() => {
        dData();
    },
        []);

    const handleDelete = (id) => {
        let localData = JSON.parse(localStorage.getItem("apt"));

        let fData = localData.filter((l) => l.id !== id);

        localStorage.setItem("apt", JSON.stringify(fData));

        console.log( fData, localData);

        dData();
    }

    const handleEdit = (id) => {
        console.log(id);
        history.push("/BookAppointment", { id: id });
    }
    return (
        <main>
            <section id="appointment" className="appointment">
                <div className="container">
                    <div className='section-title'>
                        <h2>Manage an Appointment</h2>
                    </div>
                    <div className='row text-center mb-4'>
                        <div className='col-6'>
                            <NavLink exact to={"/BookAppointment"}>Book an Appointment</NavLink>
                        </div>
                        <div className='col-6'>
                            <NavLink exact to={"/ListAppointment"}>List an Appointment</NavLink>
                        </div>
                        {
                            data.map((d, i) => {
                                return(
                        <Card key={i}
                            body
                            color="light"
                            inverse>
                            <CardBody>
                                <CardTitle tag="h5">
                                    {d.name}
                                </CardTitle>

                                <CardSubtitle
                                    className="mb-2 text-muted"
                                    tag="h6">
                                    {d.email}
                                </CardSubtitle>

                                <CardText>
                                    {d.phone}
                                </CardText>

                                <Button onClick={() => handleEdit(d.id)}>
                                    Edit
                                </Button>

                                <Button onClick={() => handleDelete(d.id)}>
                                    Delete
                                </Button>
                            </CardBody>
                        </Card>

                        )
                            })
                        }
                    </div>
                </div>
            </section>
        </main>
    );
}

export default ListAppointment;