import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navigation from './components/layout/Navigation';
import Dashboard from './components/dashboard/Dashboard';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import RetroDetails from './components/retros/RetroDetails';
import AddRetro from './components/retros/AddRetro';
import EditRetro from './components/retros/EditRetro';
import PrivateRoute from './components/hoc/PrivateRoute';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Navigation />
                <Switch>
                    <PrivateRoute exact path="/" component={Dashboard} />
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                    <PrivateRoute path="/retro/:id" component={RetroDetails} />
                    <PrivateRoute path="/retro" component={AddRetro} />
                    <PrivateRoute path="/edit/:id" component={EditRetro} />
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
