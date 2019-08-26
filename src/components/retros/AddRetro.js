import React from 'react';
import { connect } from 'react-redux';
import { startAddRetro } from '../../actions/retros';
import { Container } from 'reactstrap';
import RetroForm from './RetroForm';
import PropTypes from 'prop-types';

export class AddRetro extends React.Component {
    addRetro = retro => {
        this.props.startAddRetro(retro);
        this.props.history.push('/');
    };

    render() {
        return (
            <Container>
                <h4 className="grey-text text-darken-3">Add Retro Board</h4>
                <RetroForm onSubmit={this.addRetro} />
            </Container>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        startAddRetro: retro => dispatch(startAddRetro(retro))
    };
};

AddRetro.propTypes = {
    addRetro: PropTypes.func
};

export default connect(
    undefined,
    mapDispatchToProps
)(AddRetro);
