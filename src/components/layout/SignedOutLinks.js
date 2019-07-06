import React from 'react';
import { NavLink, NavItem } from 'reactstrap';

const SignedOutLinks = () => (
    <React.Fragment>
        <NavItem>
            <NavLink href="/register">Sign Up</NavLink>
        </NavItem>
        <NavItem>
            <NavLink href="/login">Login</NavLink>
        </NavItem>
    </React.Fragment>
);

export default SignedOutLinks;
