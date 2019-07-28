import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {
    Container,
    Row,
    Col,
    Card,
    CardBody,
    CardTitle,
    CardText,
    CardFooter,
    Button
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
                    <Row>
                        <Col md="6">
                            {' '}
                            <div>
                                Posted by {author} on {createdAt}.
                            </div>
                        </Col>
                        <Col md="6">
                            <Link to="/">
                                <Button className="float-right" color="info">
                                    Back to retros list
                                </Button>
                            </Link>
                        </Col>
                    </Row>
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
