import React from 'react';
import { connect } from 'react-redux';
import { editRetro } from '../../actions/retros';
import { Container } from 'reactstrap';
import RetroForm from './RetroForm';

export class EditRetro extends React.Component {
    onSubmit = retro => {
        this.props.editRetro(this.props.retro.id, retro);
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
        editRetro: (id, retro) => dispatch(editRetro(id, retro))
    };
};

const mapStateToProps = (state, props) => {
    const id = props.match.params.id;
    return {
        retro: state.retros.find(retro => retro.id.toString() === id)
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EditRetro);
