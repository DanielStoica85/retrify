import React from 'react';
import { connect } from 'react-redux';
import { startEditRetro } from '../../actions/retros';
import { Container } from 'reactstrap';
import RetroForm from './RetroForm';
import PropTypes from 'prop-types';

export class EditRetro extends React.Component {
    onSubmit = retro => {
        this.props.startEditRetro(this.props.retro.id, retro);
        this.props.history.push('/');
    };
    render() {
        return (
            <Container>
                <h4 className="grey-text text-darken-3">
                    Edit Retro Board with id {this.props.match.params.id}
                </h4>
                <RetroForm retro={this.props.retro} onSubmit={this.onSubmit} />
            </Container>
        );
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        startEditRetro: (id, retro) => dispatch(startEditRetro(id, retro))
    };
};

const mapStateToProps = (state, props) => {
    const id = props.match.params.id;
    return {
        retro: state.retros.find(retro => retro.id.toString() === id)
    };
};

EditRetro.propTypes = {
    startEditRetro: PropTypes.func
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EditRetro);
