import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Retro from './Retro';

// basic component
const RetrosList = props => {
    const { retros } = props;
    const retrosList = retros.map(retro => {
        return <Retro retro={retro} key={retro.id} />;
    });

    return <div className="retros-list section">{retrosList}</div>;
};

// connect the component props and the store state
const mapStateToProps = state => {
    return {
        retros: state.retros
    };
};

RetrosList.propTypes = {
    retros: PropTypes.array
};

export default connect(mapStateToProps)(RetrosList);
