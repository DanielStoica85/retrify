import React from 'react';
import { Link } from 'react-router-dom';
import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardFooter,
    Button
} from 'reactstrap';
import PropTypes from 'prop-types';

const Retro = props => {
    const { title, author, description, createdAt, id } = props.retro;
    return (
        <div>
            <Card className="mt-3">
                <CardBody>
                    <CardTitle>
                        <Link to={'/retro/' + id}>{title}</Link>
                    </CardTitle>
                    <CardSubtitle> {description}</CardSubtitle>
                </CardBody>
                <CardFooter
                    style={{
                        backgroundColor: 'lightgray',
                        borderColor: 'lightgray'
                    }}
                >
                    Added by {author} on {createdAt}
                    <Link to={`/edit/${id}`}>
                        <Button color="primary" className="float-right">
                            Edit Retro
                        </Button>
                    </Link>
                </CardFooter>
            </Card>
        </div>
    );
};

Retro.propTypes = {
    retro: PropTypes.object
};

export default Retro;
