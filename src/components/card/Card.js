import React, { useState } from 'react';
import "./Card.css";

import TimeIcon from "../../assets/hourglass.png";
import TickIcon from "../../assets/check.png";
import LighteningIcon from "../../assets/lightening.png";
import ProfileIcon_1 from "../../assets/boy.png";
import ProfileIcon_2 from "../../assets/man.png";

const Card = ({ job }) => {
    const [days, setDays] = useState(1);

    function capitalizeWords(str) {
        // Split the string into an array of words
        const words = str.split(' ');

        // Capitalize the first letter of each word
        const capitalizedWords = words.map(word => {
            return word.charAt(0).toUpperCase() + word.slice(1);
        });

        // Join the capitalized words back into a single string
        return capitalizedWords.join(' ');
    }

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
                        {capitalizeWords(job.companyName)}
                    </div>
                    <div className='company-role' >
                        {capitalizeWords(job.jobRole)}
                    </div>
                    <div className='company-location' >
                        {capitalizeWords(job.location)}
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
                <img src={TickIcon} alt='check-mark-icon' />
            </div>
            <div className='about' >
                <span className='about-main' >About Company:</span>
                <span className='about-sub' >About us</span>
                <p className='about-text' >{job.jobDetailsFromCompany}</p>
                <div className='about-fixed' >
                    <span>View Job</span>
                </div>
            </div>
            <div className='card-experience' >
                <span className='exp-main' >Minimum Experience: </span>
                <span className='exp-years' >{job.minExp} years</span>
            </div>
            <button className='apply-btn' >
                <img src={LighteningIcon} alt='Lightning-icon' />
                <span>Easy Apply</span>
            </button>
            <button className='refer-btn' >
                <img src={ProfileIcon_1} alt='profile-icon' />
                <img src={ProfileIcon_2} alt='profile-icon' />
                <span>Unlock Referral ads</span>
            </button>
        </div>
    )
}

export default Card