import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { applyFilters, clearFilters } from '../actions/jobsActions';
import "./FilterButtons.css";

const FilterButtons = () => {
    const dispatch = useDispatch();
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

            <select
                name="minSalary"
                value={filters.minExperience}
                onChange={handleChange}
            >
                <option value="">Min Experience</option>
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

            <select
                name="location"
                value={filters.remote}
                onChange={handleChange}
            >
                <option value="">Remote</option>
                <option value="remote">Remote</option>
                <option value="hybrid">Hybrid</option>
                <option value="in-office">In-office</option>
            </select>

            <select
                name="minSalary"
                value={filters.minSalary}
                onChange={handleChange}
            >
                <option value="">Min Salary</option>
                <option value="0">0 L</option>
                <option value="10">10 L</option>
                <option value="20">20 L</option>
                <option value="30">30 L</option>
                <option value="40">40 L</option>
                <option value="50">50 L</option>
                <option value="60">60 L</option>
                <option value="70">70 L</option>

            </select>

            <select
                name="jobRole"
                value={filters.jobRole}
                onChange={handleChange}
            >
                <option value="">Job Role</option>
                <option value="Engineering" disabled>Engineering</option>
                <option value="frontend">Frontend</option>
            </select>
            <input
                type="text"
                name="companyName"
                placeholder="Search by Company Name"
                value={filters.companyName}
                onChange={handleChange}
            />
            <button onClick={handleApplyFilters}>Apply Filters</button>
            <button onClick={handleClearFilters}>Clear Filters</button>
        </div>
    );
};

export default FilterButtons;
