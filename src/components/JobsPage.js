import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchJobs } from '../actions/jobsActions';
import FilterButtons from './FilterButtons';

const JobsPage = () => {
    const dispatch = useDispatch();
    const jobs = useSelector(state => state.jobs.filteredJobs);

    useEffect(() => {
        dispatch(fetchJobs());
    }, [dispatch]);

    return (
        <div>
            <FilterButtons />
            <div>
                {jobs.map(job => (
                    <div key={job.jdUid}>
                        <h2>{job.companyName}</h2>
                        <p>Location: {job.location}</p>
                        <p>Salary: {job.minJdSalary} - {job.maxJdSalary}</p>
                        {/* Add more job details here */}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default JobsPage;
