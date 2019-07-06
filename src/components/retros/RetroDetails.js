import React from 'react';
import {
    Container,
    Card,
    CardBody,
    CardTitle,
    CardText,
    CardFooter
} from 'reactstrap';
import PropTypes from 'prop-types';

const RetroDetails = props => {
    const id = props.match.params.id;
    return (
        <Container className="retro-details">
            <Card>
                <CardBody>
                    <CardTitle>Retro Title #{id}</CardTitle>
                    <CardText>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Perspiciatis velit ab optio eius corporis iste facilis,
                        sit eum distinctio inventore repudiandae obcaecati
                        eveniet sunt, quisquam iure quaerat amet reiciendis
                        error?
                    </CardText>
                </CardBody>
                <CardFooter
                    style={{
                        backgroundColor: 'lightgray',
                        borderColor: 'lightgray'
                    }}
                >
                    <div>Posted by Daniel</div>
                    <div>May 13th, 2am</div>
                </CardFooter>
            </Card>
        </Container>
    );
};

RetroDetails.propTypes = {
    match: PropTypes.object
};

export default RetroDetails;
