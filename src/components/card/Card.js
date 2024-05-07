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
            <div className='card-company' >
                <div className='card-company-logo' >
                    <img src={job.logoUrl} alt='company icon' />
                </div>
                <div className='card-company-details' >
                    <div className='company-name' >
                        {job.companyName}
                    </div>
                    <div className='company-role' >
                        {job.jobRole}
                    </div>
                    <div className='company-location' >
                        {job.location}
                    </div>
                </div>
            </div>
            <div className='card-salary' >
                <span>Estimated Salary: </span>
                {
                    job.minJdSalary
                        ? <span>{job.minJdSalary} - {job.maxJdSalary} LPA</span>
                        : <span>Upto {job.maxJdSalary} LPA</span>
                }
                <span></span>
            </div>
            <div className='about' >
                <span>About Company:</span>
                <span>About us</span>
                <p>{job.jobDetailsFromCompany}</p>
            </div>
            <div className='card-experience' >
                <span>Minimum Experience: </span>
                <span>{job.minExp} years</span>
            </div>
            <button className='card-btn' >
                <img src={LighteningIcon} alt='Lightning-icon' />
                <span>Easy Apply</span>
            </button>
            <button className='card-btn' >Unlock Referral ads</button>
        </div>
    )
}

export default Card