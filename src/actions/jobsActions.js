import { setJobs, filterJobs } from '../store/jobsSlice';

export const fetchJobs = () => async (dispatch) => {
    try {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const body = JSON.stringify({
            "limit": 10,
            "offset": 0
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body
        };

        const response = await fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", requestOptions);
        const data = await response.json();

        // Assuming result.jdList contains the array of jobs
        dispatch(setJobs(data.jdList));
    } catch (error) {
        console.error('Error fetching jobs:', error);
    }
};

export const applyFilters = (filters) => (dispatch) => {
    dispatch(filterJobs(filters));
};

export const clearFilters = () => (dispatch) => {
    // Dispatch an action to reset filters
    dispatch(filterJobs({}));
};
