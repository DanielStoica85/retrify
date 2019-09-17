import React from 'react';
import { NavLink, NavItem, Badge, Button } from 'reactstrap';
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';

export const SignedInLinks = props => {
    return (
        <React.Fragment>
            <NavItem>
                <NavLink href="/retro">New Retro</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="/">
                    <Badge color="danger" pill>
                        D.S.
                    </Badge>
                </NavLink>
            </NavItem>
            <NavItem>
                <Button onClick={props.logout}>Log Out</Button>
            </NavItem>
        </React.Fragment>
    );
};

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logout())
    };
};

export default connect(
    null,
    mapDispatchToProps
)(SignedInLinks);
