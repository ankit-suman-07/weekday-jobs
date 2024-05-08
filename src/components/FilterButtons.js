import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { applyFilters, clearFilters } from '../actions/jobsActions';
import "./FilterButtons.css";

const FilterButtons = () => {
    const dispatch = useDispatch();

    // const [job, setJob] = useState([]);
    // const [remoteWork, setRemoteWork] = useState("");
    // const [minSal, setMinSal] = useState("");
    // const [minExperience, setMinExperience] = useState("");

    const [filters, setFilters] = useState({
        minExperience: '',
        remote: '',
        minSalary: '',
        jobRole: '',
        companyName: ''
    });

    useEffect(() => {
        handleApplyFilters();
    }, [filters]); 

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFilters(prevFilters => ({
            ...prevFilters,
            [name]: value
        }));
    };

    const handleApplyFilters = () => {
        dispatch(applyFilters(filters));
    };

    const handleClearFilters = () => {
        setFilters({
            minExperience: '',
            remote: '',
            minSalary: '',
            jobRole: '',
            companyName: ''
        });
        dispatch(clearFilters());
    };

    return (
        <div className='filter' >
            <div className='filter-box' >
                {
                    filters.minExperience &&
                    <span>Minimum Experience</span>
                }
                <select
                    name="minExperience"
                    value={filters.minExperience}
                    onChange={handleChange}
                >
                    <option value="">Minimum Experience</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>

                </select>
            </div>

            <div className='filter-box' >
                {
                    filters.remote &&
                    <span>Remote</span>
                }
                <select
                    name="remote"
                    value={filters.remote}
                    onChange={handleChange}
                >
                    <option value="">Remote</option>
                    <option value="remote">Remote</option>
                    <option value="hybrid">Hybrid</option>
                    <option value="in-office">In-office</option>
                </select>
            </div>

            <div className='filter-box' >
                {
                    filters.minSalary &&
                    <span>Minimum Salary</span>
                }
                <select
                    name="minSalary"
                    value={filters.minSalary}
                    onChange={handleChange}
                >
                    <option value="">Minimum Base Pay</option>
                    <option value="0">0 L</option>
                    <option value="10">10 L</option>
                    <option value="20">20 L</option>
                    <option value="30">30 L</option>
                    <option value="40">40 L</option>
                    <option value="50">50 L</option>
                    <option value="60">60 L</option>
                    <option value="70">70 L</option>

                </select>
            </div>

            <div className='filter-box' >
                {
                    filters.jobRole &&
                    <span>Role</span>
                }
                <select
                    name="jobRole"
                    value={filters.jobRole}
                    onChange={handleChange}
                >
                    <option value="">Job Role</option>
                    <option value="Engineering" disabled>Engineering</option>
                    <option value="frontend">Frontend</option>
                    <option value="backend">Backend</option>
                    <option value="fullstack">Fullstack</option>
                    <option value="ios">IOS</option>
                    <option value="android">Android</option>
                </select>
            </div>

            <div className='filter-box' >
                {
                    filters.companyName &&
                    <span>Company</span>
                }
                <input
                    type="text"
                    name="companyName"
                    placeholder="Search by Company Name"
                    value={filters.companyName}
                    onChange={handleChange}
                />
            </div>

            <div className='filter-box' >
                <button onClick={handleClearFilters}>Clear Filters</button>
            </div>

        </div>
    );
};

export default FilterButtons;
