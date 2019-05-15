import React, { Component } from 'react';
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
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <RetrosList retros={this.state.retros} />
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <Notifications />
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;
