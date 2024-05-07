import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchJobs } from '../actions/jobsActions';
import FilterButtons from './FilterButtons';

const JobsPage = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [offset, setOffset] = useState(0);
    const jobs = useSelector(state => state.jobs.filteredJobs);

    useEffect(() => {
        dispatch(fetchJobs(offset));
    }, [dispatch]);

    // useEffect(() => {
    //     const handleScroll = () => {
    //         if (
    //             window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight
    //         ) {
    //             // User has scrolled to the bottom, load more data
    //             setLoading(true);
    //         }
    //     };

    //     window.addEventListener('scroll', handleScroll);

    //     return () => window.removeEventListener('scroll', handleScroll);
    // }, []);

    const handleScroll = async () => {
        // console.log("scrollHeight" + document.documentElement.scrollHeight);
        // console.log("innerHeight" + window.innerHeight);
        // console.log("scrollTop" + document.documentElement.scrollTop);
        try {
            if (
                window.innerHeight + document.documentElement.scrollTop + 1 >=
                document.documentElement.scrollHeight
            ) {
                setLoading(true);
                setOffset((prev) => prev + 1);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (!loading) return;

        dispatch(fetchJobs(jobs.length)); // Pass the current number of jobs as offset
        setLoading(false);
    }, [loading, dispatch, jobs.length]);

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
            {loading && <p>Loading...</p>}
        </div>
    );
};

export default JobsPage;
