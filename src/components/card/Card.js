import React, { useState } from 'react';
import "./Card.css";

import TimeIcon from "../../assets/hourglass.png";
import TickIcon from "../../assets/check.png";
import LighteningIcon from "../../assets/lightening.png";

const Card = ({ job }) => {
    const [days, setDays] = useState(1);



    return (
        <div className='card' >
            <div className='card-top' >
                <div className='card-top-batch' >
                    <img src={TimeIcon} alt='hourglass icon' />
                    <span>Posted {Math.floor(Math.random() * 50) + 1} days ago.</span>
                </div>
            </div>
            {job.companyName}
        </div>
    )
}

export default Card