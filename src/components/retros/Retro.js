import React from 'react';

const Retro = props => {
    const { title, author, date } = props.retro;
    return (
        <div className="card z-depth-1 retro-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{title}</span>
                <p>Added by {author}</p>
                <p className="grey-text">{date}</p>
            </div>
        </div>
    );
};

export default Retro;
