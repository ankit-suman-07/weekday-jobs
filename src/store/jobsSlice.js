import { createSlice } from '@reduxjs/toolkit';

export const jobsSlice = createSlice({
    name: 'jobs',
    initialState: {
        jobsList: [],
        filteredJobs: [],
    },
    reducers: {
        setJobs: (state, action) => {
            // Remove duplicates from the new data
            const newJobs = action.payload.filter(job => !state.jobsList.some(existingJob => existingJob.jdUid === job.jdUid));

            // Append the filtered new data to the existing jobsList
            state.jobsList = [...state.jobsList, ...newJobs];

            // Update filteredJobs as well if needed
            state.filteredJobs = [...state.filteredJobs, ...newJobs];
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
