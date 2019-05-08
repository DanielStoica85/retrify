import React, { Component } from 'react';
import Notifications from './Notifications';
import RetrosList from '../retros/RetrosList';

class Dashboard extends Component {
    render() {
        <div className="dashboard container">
            <div className="row">
                <div className="col s12 m6">
                    <RetrosList />
                </div>
                <div className="col s12 m5 offset-m1">
                    <Notifications />
                </div>
            </div>
        </div>;
    }
}
