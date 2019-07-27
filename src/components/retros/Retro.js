import React from 'react';
import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardFooter
} from 'reactstrap';
import PropTypes from 'prop-types';

const Retro = props => {
    const { title, author, description, createdAt } = props.retro;
    return (
        <div>
            <Card className="mt-3">
                <CardBody>
                    <CardTitle>{title}</CardTitle>
                    <CardSubtitle> {description}</CardSubtitle>
                </CardBody>
                <CardFooter
                    style={{
                        backgroundColor: 'lightgray',
                        borderColor: 'lightgray'
                    }}
                >
                    Added by {author} on {createdAt}
                </CardFooter>
            </Card>
        </div>
    );
};

Retro.propTypes = {
    retro: PropTypes.object
};

export default Retro;
