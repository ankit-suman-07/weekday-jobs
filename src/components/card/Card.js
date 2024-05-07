import React from 'react';
import "./Card.css";

const Card = ({ job }) => {
    return (
        <div>
            {job.companyName}
        </div>
    )
}

export default Card