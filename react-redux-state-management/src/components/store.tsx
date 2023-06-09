import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./reducer";

// 2. Configure store and store reducer function
export default configureStore({
    reducer: {
        reducer: counterReducer
    }
});