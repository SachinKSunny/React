import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderDish({ dish }) {
    if (dish != null)
        return (
            <Card>
                <CardImg top src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        );

    else
        return (
            <div></div>
        );
}

function RenderComments({ coms }) {
    if (coms != null) {

        var comments = coms.map((com) => {

            return (
                <ul key={com.id} className='list-unstyled'>
                    <li>
                        {com.comment}
                    </li>
                    <li>
                        -- {com.author}, {}
                        {
                            new Intl.DateTimeFormat('en-US', {
                                month: 'short', day: '2-digit', year: 'numeric'
                            }).format(new Date(com.date))
                        }
                    </li>
                </ul>
            );
        });

        return (
            <div className='p-3'>
                <h4>Comments</h4>
                {comments}
            </div>
        );


    }
    else
        return (
            <div></div>
        );
}

const DishDetail = (props) => {

    return (
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>{props.dish.name}</h3>
                    <hr />
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <RenderDish dish={props.dish} />
                </div>
                <div className="col-12 col-md-5 m-1">
                    <RenderComments coms={props.comments} />
                </div>
            </div>
        </div>


    );
}


export default DishDetail;