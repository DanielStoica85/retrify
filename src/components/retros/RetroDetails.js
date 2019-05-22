import React from 'react';
import PropTypes from 'prop-types';

const RetroDetails = props => {
    const id = props.match.params.id;
    return (
        <div className="container section project-details">
            <div className="card">
                <div className="card-content">
                    <span className="card-title">Retro Title #{id} </span>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Perspiciatis velit ab optio eius corporis iste facilis,
                        sit eum distinctio inventore repudiandae obcaecati
                        eveniet sunt, quisquam iure quaerat amet reiciendis
                        error?
                    </p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by Daniel</div>
                    <div>May 13th, 2am</div>
                </div>
            </div>
        </div>
    );
};

RetroDetails.propTypes = {
    match: PropTypes.object
};

export default RetroDetails;
