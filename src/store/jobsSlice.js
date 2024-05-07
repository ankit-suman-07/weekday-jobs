import { createSlice } from '@reduxjs/toolkit';

export const jobsSlice = createSlice({
    name: 'jobs',
    initialState: {
        jobsList: [],
        filteredJobs: [],
    },
    reducers: {
        setJobs: (state, action) => {
            state.jobsList = action.payload;
            state.filteredJobs = action.payload;
        },
        filterJobs: (state, action) => {
            const { maxSalary, minSalary, location, jobRole } = action.payload;
            state.filteredJobs = state.jobsList.filter(job =>
                (!maxSalary || job.maxJdSalary <= maxSalary) &&
                (!minSalary || job.minJdSalary >= minSalary) &&
                (!location || job.location === location) &&
                (!jobRole || job.jobRole === jobRole)
            );
        },
    },
});

export const { setJobs, filterJobs } = jobsSlice.actions;

export default jobsSlice.reducer;
