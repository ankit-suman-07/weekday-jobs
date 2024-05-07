import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { applyFilters, clearFilters } from '../actions/jobsActions';

const FilterButtons = () => {
    const dispatch = useDispatch();
    const [filters, setFilters] = useState({
        maxSalary: '',
        minSalary: '',
        location: '',
        jobRole: ''
    });

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
            maxSalary: '',
            minSalary: '',
            location: '',
            jobRole: ''
        });
        dispatch(clearFilters());
    };

    return (
        <div>
            <input
                type="number"
                name="maxSalary"
                placeholder="Max Salary"
                value={filters.maxSalary}
                onChange={handleChange}
            />
            <input
                type="number"
                name="minSalary"
                placeholder="Min Salary"
                value={filters.minSalary}
                onChange={handleChange}
            />
            <input
                type="text"
                name="location"
                placeholder="Location"
                value={filters.location}
                onChange={handleChange}
            />
            <input
                type="text"
                name="jobRole"
                placeholder="Job Role"
                value={filters.jobRole}
                onChange={handleChange}
            />
            <button onClick={handleApplyFilters}>Apply Filters</button>
            <button onClick={handleClearFilters}>Clear Filters</button>
        </div>
    );
};

export default FilterButtons;
