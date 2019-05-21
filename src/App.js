import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import RetroDetails from './components/retros/RetroDetails';
import AddRetro from './components/retros/AddRetro';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Navbar />
                <Switch>
                    <Route exact path="/" component={Dashboard} />
                    <Route path="/retro/:id" component={RetroDetails} />
                    <Route path="/retro" component={AddRetro} />
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
