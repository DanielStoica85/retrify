import React from 'react';

const Notifications = () => {
    return (
        <div>
            <p>Notifications</p>
            <p>
                You are running this application in{' '}
                <b>{process.env.NODE_ENV}</b>.
            </p>
        </div>
    );
};

export default Notifications;
