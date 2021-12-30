import React from 'react';

export default function AlertUser(props) {
    const {user} = props;
    return (
        <div className="alert alert-primary alert-dismissible fade show" role="alert">
            <i className="bi bi-person-check-fill"></i>

            <strong className='ms-3 me-2'>Welcome back </strong> {user.username}

            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>

        </div>
    )
}
