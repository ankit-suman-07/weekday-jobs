import { configureStore } from '@reduxjs/toolkit';
// import jobsReducer from './jobsReducer';
import jobsSlice from './jobsSlice';


export default configureStore({
    reducer: {
        jobs: jobsSlice,
    },
});
