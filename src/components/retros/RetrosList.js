import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Retro from './Retro';

const RetrosList = props => {
    const { retros } = props;
    const retrosList =
        retros &&
        retros.map(retro => {
            return <Retro retro={retro} key={retro.id} />;
        });

    return (
        <div className="retros-list section">
            <p>Retros</p>
            {retros.length > 0 ? (
                <p>{retrosList}</p>
            ) : (
                <p>
                    You currently have no retros. Click{' '}
                    <Link to="/retro">HERE</Link> to add your first retro.
                </p>
            )}
        </div>
    );
};

RetrosList.propTypes = {
    retros: PropTypes.array
};

export default RetrosList;
