import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Notifications from './Notifications';
import RetrosList from '../retros/RetrosList';
import { connect } from 'react-redux';

class Dashboard extends Component {
    render() {
        return (
            <Container className="dashboard">
                <Row>
                    <Col sm="12" md="6">
                        <RetrosList retros={this.props.retros} />
                    </Col>
                    <Col sm="12" md={{ size: 5, offset: 1 }}>
                        <Notifications />
                    </Col>
                </Row>
            </Container>
        );
    }
}

const mapStateToProps = state => {
    return {
        retros: state.retros
    };
};

export default connect(mapStateToProps)(Dashboard);
