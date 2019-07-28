import React from 'react';
import { connect } from 'react-redux';
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
    const { title, description, author, createdAt } = props.retro;

    return (
        <Container className="retro-details">
            <Card>
                <CardBody>
                    <CardTitle>{title}</CardTitle>
                    <CardText>{description}</CardText>
                </CardBody>
                <CardFooter
                    style={{
                        backgroundColor: 'lightgray',
                        borderColor: 'lightgray'
                    }}
                >
                    <div>Posted by {author}</div>
                    <div>{createdAt}</div>
                </CardFooter>
            </Card>
        </Container>
    );
};

const mapStateToProps = (state, props) => {
    const id = props.match.params.id;
    return {
        retro: state.retros.find(retro => retro.id.toString() === id)
    };
};

RetroDetails.propTypes = {
    match: PropTypes.object
};

export default connect(mapStateToProps)(RetroDetails);
