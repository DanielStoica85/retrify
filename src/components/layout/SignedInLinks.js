import React from 'react';
import { NavLink, NavItem, Badge } from 'reactstrap';

const SignedInLinks = () => (
    <React.Fragment>
        <NavItem>
            <NavLink href="/retro">New Retro</NavLink>
        </NavItem>
        <NavItem>
            <NavLink href="/">Log Out</NavLink>
        </NavItem>
        <NavItem>
            <NavLink href="/">
                <Badge color="danger" pill>
                    D.S.
                </Badge>
            </NavLink>
        </NavItem>
    </React.Fragment>
);

export default SignedInLinks;
