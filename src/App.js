import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navigation from './components/layout/Navigation';
import Dashboard from './components/dashboard/Dashboard';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import RetroDetails from './components/retros/RetroDetails';
import AddRetro from './components/retros/AddRetro';
import EditRetro from './components/retros/EditRetro';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Navigation />
                <Switch>
                    <Route exact path="/" component={Dashboard} />
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                    <Route path="/retro/:id" component={RetroDetails} />
                    <Route path="/retro" component={AddRetro} />
                    <Route path="/edit/:id" component={EditRetro} />
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
