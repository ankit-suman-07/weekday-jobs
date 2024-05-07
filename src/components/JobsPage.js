import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchJobs } from '../actions/jobsActions';
import FilterButtons from './FilterButtons';
import Card from './card/Card';

import "./JobsPage.css";

const JobsPage = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [offset, setOffset] = useState(0);
    const jobs = useSelector(state => state.jobs.filteredJobs);
    console.log(jobs)

    useEffect(() => {
        dispatch(fetchJobs(offset));
    }, [dispatch]);


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

        const timeoutId = setTimeout(() => {
            dispatch(fetchJobs(jobs.length));
            setLoading(false);
        }, 1000);

        return () => clearTimeout(timeoutId);
    }, [loading, dispatch, jobs.length]);

    return (
        <div>
            <FilterButtons />
            <div className='jobs' >

                {jobs.map(job => (
                    <Card job={job} key={job.jdUid} />
                ))}
            </div>
            {loading && <p>Loading...</p>}
        </div>
    );
};

export default JobsPage;
