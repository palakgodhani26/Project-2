import React from 'react';
import { Card ,CardBody, CardTitle, cardSubtitle, CardText} from 'reactstrap';

function List({getId,Data}) {
    
    return (
        <div>
        {
            Data.map((o,i) => {
                return (
                    <Card key={i}>
                        <CardBody>
                            <CardTitle tag="h5">
                                {o.name}
                            </CardTitle>

                            <cardSubtitle 
                            className="mb-2-text-muted"
                            tag="h6">
                                {o.price}
                            </cardSubtitle>

                            <CardText>
                                {o.quantity}
                            </CardText>

                            <button onClick={() =>getId(o.id)}>Click</button>

                        </CardBody>
                    </Card>
                )

            })
        }
        </div>
    );
}

export default List;