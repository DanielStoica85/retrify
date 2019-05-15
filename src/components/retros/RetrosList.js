import React from 'react';
import Retro from './Retro';

const RetrosList = props => {
    const { retros } = props;
    const retrosList = retros.map(retro => {
        return <Retro retro={retro} key={retro.id} />;
    });

    return <div className="retros-list section">{retrosList}</div>;
};

export default RetrosList;
