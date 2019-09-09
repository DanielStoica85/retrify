import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startRemoveRetro } from '../../actions/retros';
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

export class RetroDetails extends React.Component {
    onRemove = () => {
        this.props.startRemoveRetro(this.props.retro.id);
        this.props.history.push('/');
    };

    render() {
        const { title, description, author, createdAt } = this.props.retro;

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
                            <Col md="8">
                                {' '}
                                <div>
                                    Posted by {author} on {createdAt}.
                                </div>
                            </Col>
                            <Col md="2">
                                <Link to="/">
                                    <Button
                                        className="float-right"
                                        color="info"
                                    >
                                        Back to retros list
                                    </Button>
                                </Link>
                            </Col>
                            <Col md="2">
                                <Button
                                    onClick={this.onRemove}
                                    className="float-left"
                                    color="danger"
                                >
                                    Remove retro
                                </Button>
                            </Col>
                        </Row>
                    </CardFooter>
                </Card>
            </Container>
        );
    }
}

const mapStateToProps = (state, props) => {
    const id = props.match.params.id;
    return {
        retro: state.retros.find(retro => retro.id.toString() === id)
    };
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        startRemoveRetro: id => dispatch(startRemoveRetro(id))
    };
};

RetroDetails.propTypes = {
    match: PropTypes.object
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RetroDetails);
