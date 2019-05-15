import React from 'react';
import PropTypes from 'prop-types';

import Retro from './Retro';

const RetrosList = props => {
    const { retros } = props;
    const retrosList = retros.map(retro => {
        return <Retro retro={retro} key={retro.id} />;
    });

    return <div className="retros-list section">{retrosList}</div>;
};

RetrosList.propTypes = {
    retros: PropTypes.array
};

export default RetrosList;
