import { setJobs, filterJobs } from '../store/jobsSlice';

export const fetchJobs = (offset) => async (dispatch) => {
    try {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const body = JSON.stringify({
            "limit": 9,
            "offset": offset
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
        console.log("API called")
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
