import React from 'react';
import { Card ,CardBody, CardTitle, CardSubtitle, CardText, button} from 'reactstrap';

function List({getId,Data}) {
    
    return (
        <div>
        {
            Data.map((o,i) => {
                return (
                    <div key={i}>
                    <Card>
                        <CardBody>
                            <CardTitle tag="h5">
                                {o.name}
                            </CardTitle>

                            <CardSubtitle
                            className="mb-2-text-muted"
                            tag="h6">
                                {o.price}
                            </CardSubtitle>

                            <CardText>
                                {o.quantity}
                            </CardText>

                            <button onClick={() =>getId(o.id)}>Click</button>

                        </CardBody>
                    </Card>
                    </div>
                )

            })
        }
        </div>
    );
}

export default List;