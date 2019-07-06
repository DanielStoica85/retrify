import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Notifications from './Notifications';
import RetrosList from '../retros/RetrosList';

class Dashboard extends Component {
    state = {
        retros: [
            {
                title: 'Some title',
                author: 'Some author',
                date: 'May 10th, 2019',
                id: 1
            },
            {
                title: 'Some title',
                author: 'Some author',
                date: 'May 10th, 2019',
                id: 2
            },
            {
                title: 'Some title',
                author: 'Some author',
                date: 'May 10th, 2019',
                id: 3
            }
        ]
    };
    render() {
        return (
            <Container className="dashboard">
                <Row>
                    <Col sm="12" md="6">
                        <RetrosList retros={this.state.retros} />
                    </Col>
                    <Col sm="12" md={{ size: 5, offset: 1 }}>
                        <Notifications />
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Dashboard;
