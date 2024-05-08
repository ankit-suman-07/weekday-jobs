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
            const { minExperience, remote, minSalary, jobRole, companyName } = action.payload;
            state.filteredJobs = state.jobsList.filter(job =>
                (!minExperience || job.minExp >= minExperience) &&
                (!remote || job.location === remote) &&
                (!minSalary || job.minJdSalary >= minSalary) &&
                (!companyName || job.companyName.toLowerCase().includes(companyName.toLowerCase()))
            );
        },
    },
});

export const { setJobs, filterJobs } = jobsSlice.actions;

export default jobsSlice.reducer;
